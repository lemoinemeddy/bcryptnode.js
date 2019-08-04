// Lemoine Meddy 2019, can be fork ;)

const bcrypt = require ('bcrypt')

function connect(password, username, cb){
const iteration = 10
password.length <= 72 ? bcrypt.hash(password, iteration, (err, hash_input) => {
if(err) throw err
// get hash for username from bdd
let hash_bdd =  ''
bcrypt.compare(hash_bdd, hash_input, (err, res) => {
if(err) throw err
cb(res)
})
}) : "needed small password" //if moore than 72
}

let username = "meddy"
let password = "Hellodude"

connect(password, username, hash_bdd, (reponse) => {
  console.log(reponse)
})
