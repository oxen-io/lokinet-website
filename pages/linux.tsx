import { NextApiResponse } from "next"


function Page() {
  // Render data...
}

export async function getServerSideProps({ res }: {res: NextApiResponse}) {

  const fetched = await fetch('https://api.github.com/repos/oxen-io/lokinet/releases/latest');
  if (!fetched) {
    return {
      notFound: true,
    }
  }
  const json = await fetched.json()
  if (!json || !json.assets) {
    return {
      notFound: true,
    }
  }
  const assetsUrl =  json.assets.map((m:any) => m.browser_download_url)
  if (!assetsUrl || !assetsUrl.length) {
    return {
      notFound: true,
    }
  }
  const linuxAssetUrl = assetsUrl.find((a:string) => a.endsWith('.tar.xz'))
  if (!linuxAssetUrl) {
    return {
      notFound: true,
    }
  }

  return {
    redirect: {
      permanent: false,
      destination:linuxAssetUrl,
    },
    props:{},
  };
}



export default Page;