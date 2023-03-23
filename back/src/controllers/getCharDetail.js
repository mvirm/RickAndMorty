const axios = require ('axios');

const URL = "https://rickandmortyapi.com/api/character";
//CREADO EN ASYNC AWAIT
const getCharDetail = async(req, res) => {
    const {detailId} = req.params; 
    try {  
        const response = await axios(`${URL}/${detailId}`)
        const data = response.data
         const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species      
        };
        res.status(200).json(character)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
//CREADO EN EXPRESS
/*const getCharDetail = (req, res) => {
    const {detailId} = req.params;
    axios(`${URL}/${detailId}`)
        .then(response => response.data)
        .then(data => {
            const character = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                status: data.status,
                origin: data.origin,
                species: data.species      
            };
            res.status(200).json(character)
        })
        .catch(error => {
            res.status(500).json({error: error. message})
        });
};*/
//CREADO EN HW PROMESAS
/*const getCharDetail = (res, ID) => {
axios(`https://rickandmortyapi.com/api/character/${ID}`)
        .then(response => response.data)
        .then(data => {
            let char = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                status: data.status,
                origin: data.origin,
                species: data.species       
            };
        res.writeHead(200, { 'Content-type' : 'application/json'})
        res.end(JSON.stringify(char))
        })
        .catch(error => {res.writeHead(500, {'Content-type' : 'text/plain'})
                       res.end(error.message)})
}*/

module.exports = {
    getCharDetail,
}