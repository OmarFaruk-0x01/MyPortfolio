import { NextApiRequest, NextApiResponse } from "next";

export default function works(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({"hI":"hELO"});
}
