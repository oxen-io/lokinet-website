import { NextApiResponse } from "next"
import { GetDownloadURL } from "../components/DownloadLokinet"


function Page() {
  // Render data...
}

export async function getServerSideProps({ res }: {res: NextApiResponse}) {

  var downloadURL = await GetDownloadURL("latest", ".exe");

  if(downloadURL == "error") {
      return {
        notFound: true,
      };
  }

  if(downloadURL == "missing_filetype"){

      const fetched = await fetch("https://api.github.com/repos/oxen-io/lokinet/releases");

      if (!fetched) {
        return {
          notFound: true,
        };
      }
      const json = await fetched.json();
      if (!json) {
        return {
          notFound: true,
        };
      }

      for (let i = 1; i < json.length; i++) {

          downloadURL = await GetDownloadURL(json[i].id.toString(), ".exe");
          if(downloadURL != "error" && downloadURL != "missing_filetype") {
              break;
          }

      }

  }

  return {
    redirect: {
      permanent: false,
      destination: downloadURL,
    },
    props:{},
  };
}



export default Page;
