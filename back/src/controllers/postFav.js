const {Favorite} =require('../DB_connection');

const postFav = async(req, res) => {
const {name, origin, status, image, species, gender } = req.body;
if(!name || !origin || !status || !image || !species || !gender) res.status(401).send('Faltan datos');
try {
    const fav = await Favorite.findOrCreate({
        where : {name, origin, status, image, species, gender}
    });
    res.status(200).json(fav);
} catch (error) {
    res.status(500).json({error: error.message})
}    
};

module.exports = {
    postFav
}