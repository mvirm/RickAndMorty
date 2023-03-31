const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } =require('../controllers/getCharDetail');
const { getFavs, addFav, deleteFav } = require('../controllers/favControllers')


const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:detailId', getCharDetail);

router.get('/fav', (req, res) =>{
    try {
        const allFavorites = getFavs();
        res.status(200).json(allFavorites)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});
// router.get('/fav', (req, res) => {
//     res.status(200).json(favs);
// })
router.post('/fav', (req, res) => {
    const { id, name, species, gender, image } = req.body;
    try {
        const createFav = addFav(id, name, species, gender, image);
        res.status(200).json(createFav)
    } catch (error) {
        res.status(404).json({error: error.message})
    } 
})
// router.post('/fav', (req, res) => {
//     const { id, name, species, gender,image } = req.body;
//     if(!id || !name || !image) {
//        res.status(404).send('Faltan datos');
//     } else {
//         let character = {
//             id, 
//             name, 
//             species,
//             gender,
//             image
//             } 
//         favs.push(character);
//       res.status(200).json(favs);
//     } 
// });
router.delete('/fav/:id', (req, res) =>{
    const { id } = req.params;
    try {
        const deleted = deleteFav(id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})
// router.delete('/fav/:id', (req, res) => {
//     const { id } = req.params;
//     const characterDelete = favs.filter(char => char.id !== Number(id));
//     favs = characterDelete;
//     res.status(200).send("Se eliminó el personaje correctamente");
// })

module.exports = {
    router
}