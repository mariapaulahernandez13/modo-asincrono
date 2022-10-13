//Este es el primer punto de la evidencia, callback.
const request = require('request')

const url = "https://meowfacts.herokuapp.com"

const r = request(url, { json:true }, function ( err, response, data ){
    console.log(data)
}

)