import bcrypt from "bcryptjs"
import { getDatabase, ref, push } from "firebase/database"

import { db } from "../../firebase/firebase-config"

export default async function handler(req, res) {
  const data = JSON.parse(req.body)
  if(data.form === "login"){
    console.log(data)
    res.send("login request")
  } else if(data.form === "signup") {
    const passwordDigest = await bcrypt.hash(data.password, 10)
    const {firstName, lastName, email} = data
    const user = {firstName, lastName, email, passwordDigest}
    const dbUser = push(ref(getDatabase(), 'users/'),user)
    console.log(dbUser)
    res.send(JSON.stringify(dbUser))
  } else {
    console.error("unsupported request: ", data)
    res.send("unsupported request")
  }
}


