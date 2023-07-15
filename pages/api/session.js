import xprisma from "../../prisma/client.js"

export default async function handler(req, res) {
  const data = JSON.parse(req.body)
  if(data.form === "login"){
    const dbResult = await xprisma.user.login(data)
    if(typeof dbResult === 'string'){
      res.status(401).send(dbResult)
    } else {
      const {passwordDigest, ...user} = dbResult
      res.send(JSON.stringify(user))
    }
  } else {
    // const passwordDigest = await bcrypt.hash(data.password, 10)
    // const {firstName, lastName, email} = data
    // const result = {firstName, lastName, email, passwordDigest}
    // console.log(result)
    // res.send(JSON.stringify(result))
    const {passwordDigest, ...user} = await xprisma.user.signUp(data)
    res.send(JSON.stringify(user))
  }
}
