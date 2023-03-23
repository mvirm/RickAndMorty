const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } =require('../controllers/getCharDetail');
//const { getFavs, addFav, deleteFav } = require('../controllers/favControllers')
let {favs} = require('../utils/favs.js')

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:detailId', getCharDetail);

router.get('/fav', (req, res) => {
    res.status(200).json(favs);
})
router.post('/fav', (req, res) => {
    const { id, name, image } = req.body;
    if(!id || !name || !image) {
       res.status(404).send('Faltan datos');
    } else {
       let character = {
            id, 
            name, 
        }
        favs.push(character);
      res.status(200).json(favs);
    } 
});
router.delete('/fav/:id', (req, res) => {
    const { id } = req.params;
    const characterDelete = favs.filter(char => char.id !== Number(id));
    favs = characterDelete;
    res.status(200).send("Se eliminó el personaje correctamente");
})

module.exports = {
    router
}