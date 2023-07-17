import xprisma from "./client.mjs"

const users = ['one', 'two', 'three', 'four', 'five']

// const seed = async () => { 
//   for(let user of users ){
//     const udata = {firstName: "Dummy",lastName: `${user.toUpperCase()}`, email: `dummy${user}@email.com`, password: 'pass',passwordConfirm: 'pass'}
//     const savedUser = await xprisma.user.signUp(udata)
//     console.log(savedUser)
//   }
// }

// seed()

const generateUser = async (dummy) => {
  const udata = {
    firstName: "dummy",
    lastName: dummy,
    email: `dummy${dummy}@email.com`,
    password: 'pass',
    passwordConfirmation: 'pass'
  }
  const savedUser = await xprisma.user.signUp(udata)
  return savedUser
}

for(let user of users){
  const generatedUser = await generateUser(user)
  console.log(generatedUser)
}