const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character";
//CREADO EN ASYNC AWAIT
const getCharById = async(req, res) => {
    const {id} = req.params; 
    try {
        const response = await axios(`${URL}/${id}`)
        const data = response.data
        let character = {
            id: data.id,
            name: data.name,
            species: data.species,      
            gender: data.gender,
            image: data.image
        };
        res.status(200).json(character)
    } catch (error) {
        res.status(500).json({error: error. message}) 
    };
}


//CREADO EN EXPRESS
/*const getCharById = (req, res) => {
    const {id} = req.params;
    axios(`${URL}/${id}`)
        .then(response => response.data)
        .then(data => {
            let character = {
                id: data.id,
                name: data.name,
                species: data.species,      
                gender: data.gender,
                image: data.image
            };
            res.status(200).json(character)
        })
        .catch(error => {
            res.status(500).json({error: error. message})
        });
};*/
//CREADO EN HW PROMESAS
/*const getCharById = (res, ID) => {
    axios(`https://rickandmortyapi.com/api/character/${ID}`)
        .then(response => response.data)
        .then(data => {
            let character = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species       
            };
            res.writeHead(200, { 'Content-type' : 'application/json'})
            res.end(JSON.stringify(character))
        })
        .catch(error => {res.writeHead(500, {'Content-type' : 'text/plain'})
                       res.end(error.message)})
}*/



module.exports = {
    getCharById
}