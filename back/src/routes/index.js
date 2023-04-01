const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } =require('../controllers/getCharDetail');
const { postUser } =require('../controllers/postUser');
const { login } =require('../controllers/login');
const { postFav } =require('../controllers/postFav');
const { getFavs } =require('../controllers/getFavs');
const { deleteFav } =require('../controllers/deleteFav');



const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:detailId', getCharDetail);

router.post('/fav', postFav);
router.get('/fav', getFavs);
router.delete('/fav/:id', deleteFav);

router.post('/login', postUser);
router.get('/login', login);

// router.get('/login', async(req, res) => {
//     const { email, password } = req.query;
//     try {
//         const user = await login(email, password);
//         res.status(200).json(user); 
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// });


// router.post('/fav', postFav);


// router.get('/fav', (req, res) =>{
//     try {
//         const allFavorites = getFavs();
//         res.status(200).json(allFavorites)
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// });
// router.get('/fav', (req, res) => {
//     res.status(200).json(favs);
// })
// router.post('/fav', (req, res) => {
//     const { id, name, species, gender, image } = req.body;
//     try {
//         const createFav = addFav(id, name, species, gender, image);
//         res.status(200).json(createFav)
//     } catch (error) {
//         res.status(404).json({error: error.message})
//     } 
// })
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
// router.delete('/fav/:id', (req, res) =>{
//     const { id } = req.params;
//     try {
//         const deleted = deleteFav(id);
//         res.status(200).json(deleted);
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// })
// router.delete('/fav/:id', (req, res) => {
//     const { id } = req.params;
//     const characterDelete = favs.filter(char => char.id !== Number(id));
//     favs = characterDelete;
//     res.status(200).send("Se eliminó el personaje correctamente");
// })

module.exports = {
    router
}