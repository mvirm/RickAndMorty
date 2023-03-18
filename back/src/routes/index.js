const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } =require('../controllers/getCharDetail');
const { getFavs, addFav, deleteFav } = require('../controllers/favControllers')

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:detailId', getCharDetail);

router.get('/fav', getFavs)
router.post('/fav', addFav);
router.delete('/fav/:id', deleteFav)

module.exports = {
    router
}