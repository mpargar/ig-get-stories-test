import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(JSON.stringify(req.body));
  console.log(JSON.stringify(body, null, 2));
  res.status(200).send(req.query["hub.challenge"]);
}
