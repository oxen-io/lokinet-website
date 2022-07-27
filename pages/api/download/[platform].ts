import { NextApiRequest, NextApiResponse } from "next";
import {
  Cache,
  readCacheFile,
  updateDownloadsCache,
} from "../../../utils/cache";

const updateRate = 60 * 60 * 1000; // hourly

function isDownloadFresh(cache: Cache, fileType: string): boolean {
  const now = Date.now();

  return Boolean(
    cache &&
      cache.downloads &&
      cache.downloads[fileType] &&
      now - cache.downloads[fileType].timestamp < updateRate
  );
}

async function getAssetUrl(data: any, fileType: string): Promise<string> {
  try {
    if (!data) throw new Error("No data found");
    if (!data.assets || data.assets.length === 0)
      throw new Error("No assets found");

    const assets = data.assets.map((item: any) => item.browser_download_url);
    const assetURL = assets.find((asset: string) => asset.endsWith(fileType));
    if (!assetURL) {
      throw new Error("No matching filetype");
    }

    return assetURL;
  } catch (err) {
    console.error("Download API getAssetURL()", err);
    return "error";
  }
}

async function getFallbackUrl(fileType: string): Promise<string> {
  try {
    const fetched = await fetch(
      "https://api.github.com/repos/oxen-io/lokinet/releases"
    );
    const data = await fetched.json();
    if (!data) throw new Error("No data found");

    let assetURL = "";

    for (let i = 1; i < Object.keys(data).length; i++) {
      assetURL = await getAssetUrl(data[i], fileType);
      if (assetURL !== "error") {
        break;
      }
      continue;
    }

    if (assetURL === "error") {
      throw new Error("No fallback asset found");
    }

    return assetURL;
  } catch (err) {
    console.log("Download API getFallbackUrl()", err);
    return "error";
  }
}

async function getDownloadUrl(tag: string, fileType: string): Promise<string> {
  const fetched = await fetch(
    `https://api.github.com/repos/oxen-io/lokinet/releases/${tag}`
  );
  const data = await fetched.json();
  let url = await getAssetUrl(data, fileType);

  if (url === "error") {
    console.log(
      `Download API: ${tag} has no matching ${fileType.substring(
        1
      )} fetching fallback url`
    );
    url = await getFallbackUrl(fileType);

    if (url === "error") {
      throw new Error("No url found");
    }
  }

  return url;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fileType = req.query.platform === "linux" ? ".tar.xz" : ".exe";
  const cache = readCacheFile();

  try {
    let downloadURL;
    if (cache && isDownloadFresh(cache, fileType)) {
      downloadURL = cache.downloads![fileType].url;
    } else {
      downloadURL = await getDownloadUrl("latest", fileType);
      updateDownloadsCache(fileType, downloadURL, Date.now());
    }
    return res.redirect(downloadURL);
  } catch (err) {
    res.status(500).json({ message: `Download API getDownloadUrl() ${err}` });
  }
}
