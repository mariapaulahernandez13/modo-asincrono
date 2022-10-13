const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//Configuración de request
let config = {
    url : url,
    method: 'get'
}

const f = async () => {
    try {
        let response = await axios(config)
        const tipos = response.data.results
        tipos.forEach(element => {
            console.log(element.name)
            console.log('----------------')
        });
    } catch (error) {
        console.log( Error(error) )
    }
} 

f()

//Realizar la operación async
/*.then( response => response.data.results)
.then( data => {
    data.forEach(function(tipo){
        console.log(`Tipo: ${tipo.name}`)
        console.log(`-----------------`)      
    });
}).catch(error => {
    console.log(Error(`Error: $error`))
})*/