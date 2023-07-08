import bcrypt from "bcryptjs"

export default async function handler(req, res) {
  const data = JSON.parse(req.body)
  if(data.form === "login"){
    console.log(data)
    res.send("login request")
  } else {
    const passwordDigest = await bcrypt.hash(data.password, 10)
    const {firstName, lastName, email} = data
    const result = {firstName, lastName, email, passwordDigest}
    console.log(result)
    res.send(JSON.stringify(result))
  }
}
