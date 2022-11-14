import getConfig from "next/config";

// https://nextjs.org/docs/api-reference/next.config.js/redirects
export interface IRedirection {
  source: string;
  destination: string;
  permanent: boolean;
}

const redirects: IRedirection[] = getConfig().serverRuntimeConfig.redirects;

async function fetchLatestVersionLink(repo: string, platform: string) {
  const fallbackVersionLink = `https://github.com/oxen-io/lokinet/releases/download/${
    platform === "/windows"
      ? "v0.9.7/lokinet-0.9.7-win64.exe"
      : "v0.8.4/lokinet-v0.8.4-macos.pkg"
  }`; // NOTE should update periodically

  const res = await fetch(
    `https://api.github.com/repos/oxen-io/${repo}/releases/latest`
  );
  const data = await res.json();
  if (!data) return fallbackVersionLink;

  if (res.status !== 200) {
    console.warn(
      `Redirect Service: Code ${res.status} | ${data.message}`,
      `${data.documentation && `| See ${data.documentation}`}`
    );
    console.log(
      `Redirect Service: Falling back to version link ${fallbackVersionLink}.`
    );
    return fallbackVersionLink;
  }

  let link = null;
  let hasPlatformLink = data.assets.some(
    (el: { browser_download_url: string; name: string }) => {
      if (platform === "/mac") {
        link = el.browser_download_url;
        let regex = new RegExp(/.*.dmg$|.*.pkg$/);
        el.name.match(regex) ? true : false;
      } else {
        //for windows
        link = el.browser_download_url;
        let regex = new RegExp(/.*.exe$/);
        el.name.match(regex) ? true : false;
      }
    }
  );

  if (hasPlatformLink) return link;
  return fallbackVersionLink;
}

export async function getDynamicRedirection(url: string) {
  const dynamicRedirects = await fetchLatestVersionLink("lokinet", url);
  return dynamicRedirects;
}

export async function hasRedirection(url: string) {
  let response = null;
  redirects.forEach((redirection) => {
    if (redirection.source === url) {
      response = {
        source: redirection.source,
        destination: redirection.destination,
        permanent: redirection.permanent,
      };
    }
  });
  return response;
}
