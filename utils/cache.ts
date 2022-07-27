import { readFileSync, writeFileSync } from "fs";

const cachePath = "./cache";

export type Cache = {
  downloads?: Record<string, { url: string; timestamp: number }>;
};

export function readCacheFile(): Cache | null {
  try {
    const data = JSON.parse(
      readFileSync(cachePath, {
        encoding: "utf8",
        flag: "r",
      })
    );
    return data;
  } catch (err) {
    console.error("No cache file found");
    return null;
  }
}

export function updateDownloadsCache(
  fileType: string,
  url: string,
  timestamp: number
) {
  let oldData = readCacheFile();
  const payload: Cache = oldData ? { ...oldData } : { downloads: {} };
  payload.downloads![fileType] = { url, timestamp };

  writeFileSync(cachePath, JSON.stringify(payload), {
    encoding: "utf-8",
    flag: "w",
  });
  console.log("Downloads cache updated for", fileType);
}
