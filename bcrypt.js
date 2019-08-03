// Lemoine Meddy 2019, can be fork ;)

const bcrypt = require ('bcrypt')
const iteration = 10

class Want {

static getHash(password, cb){
bcrypt.hash(password, iteration, function(err, hash){
  if(err) throw err
cb( password.length <= 72  ? hash : "needed small password" )
})
}
static getMatch(password, hash, cb){
bcrypt.compare(password, hash, function(err, res){
if(err) throw err
cb(res)
})
}
}

let password = "Hellodude"
let hash = "" //DEMO

// Get Hash, from example user input
Want.getHash(password , function(rephash){
console.log(rephash)
})

// Compare is match with password & hash
Want.getMatch(password , hash, function(match){
console.log(match)
})
