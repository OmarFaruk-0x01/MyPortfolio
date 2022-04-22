import data from "../../../public/data/Works.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function work(req: NextApiRequest, res: NextApiResponse) {
  const workID = req.query.workID;
  const _work = data.find((item) => item.id == workID);
  if (_work) {
    res.status(200).json(_work);
  } else {
    res.status(404).json({});
  }
}
