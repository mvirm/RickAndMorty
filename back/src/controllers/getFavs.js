const {Favorite} =require('../DB_connection');

const getFavs = async(req, res) => {
    try {
        const favs = Favorite.findAll();
        if(!favs.length) res.status(404).json({message: 'No hay favoritos'});
        res.status(200).json(favs)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    

};

module.exports = {
    getFavs
}