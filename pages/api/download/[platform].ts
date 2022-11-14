import { NextApiRequest, NextApiResponse } from "next";
import { getDynamicRedirection } from "../../../services/redirect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = `/${req.query.platform}`;
  const redirection: any = await getDynamicRedirection(slug);
  res.redirect(redirection);
}
