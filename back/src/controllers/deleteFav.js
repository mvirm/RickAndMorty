const {Favorite} = require('../DB_connection');

const deleteFav = async(req, res) => {
    const {id} = req.params;
    const{userId} = req.query;
    try {
        const favDel = await Favorite.findByPk(id);
        await favDel.removeUser(userId);
        res.status(200).json({message: `el personaje con el ID:${id} ha sido eliminado de favoritos`});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {
    deleteFav
}