// utils for checking if hyperlinks are for the current site
// are there any links to id's i.e. #mac, #linux, #windows

const protocols = ["https://", "http://", "ftp://", "file://", "mailto:"];

export function isLocal(url: string) {
  let result = true;
  if (url[0] === "#" || url.indexOf("localhost:") > 0) {
    return result;
  }
  protocols.forEach((protocol) => {
    if (url.indexOf(protocol) >= 0) {
      result = false;
    }
  });
  return result;
}
