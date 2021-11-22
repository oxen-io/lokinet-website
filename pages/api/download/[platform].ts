import { NextApiRequest, NextApiResponse } from "next";

async function getAssetURL(tag: string, fileType: string): Promise<string> {
  try {
    const fetched = await fetch(
      `https://api.github.com/repos/oxen-io/lokinet/releases/${tag}`
    );

    const data = await fetched.json();
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
    let assetURL = "";

    const fetched = await fetch(
      "https://api.github.com/repos/oxen-io/lokinet/releases"
    );

    const data = await fetched.json();
    if (!data) throw new Error("No data found");

    for (let i = 1; i < data.length; i++) {
      try {
        assetURL = await getAssetURL(data[i].id.toString(), fileType);
        break;
      } catch (err) {
        continue;
      }
    }

    if (assetURL === "") {
      throw new Error("No fallback asset found");
    }

    return assetURL;
  } catch (err) {
    console.log("Download API getFallbackUrl()", err);
    return "error";
  }
}

async function getDownloadUrl(tag: string, fileType: string): Promise<string> {
  let url = await getAssetURL(tag, fileType);
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

  try {
    let downloadURL = await getDownloadUrl("latest", fileType);
    return res.redirect(downloadURL);
  } catch (err) {
    res.status(500).json({ message: `Download API getDownloadUrl() ${err}` });
  }
}
