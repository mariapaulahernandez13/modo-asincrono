const needle = require('needle')

const url = "https://digimon-api.vercel.app/api/digimon"

const f = async () => {
    try {
        let response = await needle('get', url)
        const tipos = response.body
        tipos.forEach(element => {
            console.log(element.name)
            console.log('----------------')
        });
    } catch (error) {
        console.log(Error(error))
    }
}

f()