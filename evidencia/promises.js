const axios = require('axios')

const url = "http://ccdb.hemiola.com/characters/radicals/85"

//Configuración de request
let config = {
    url : url,
    method: 'get'
}

//Realizar la operación async
axios(config).then(function(response){
    return response.string
}).then(function(string){
        console.log(`Caracter: ${string.string}`)
        console.log(`-----------------`)
}).catch(function(error){
    console.log(Error(`Error: $error`))
})