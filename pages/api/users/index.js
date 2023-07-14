import { getDatabase, ref, get } from "firebase/database"

export default async function handler(req, res){
  res.send(req.body)
}