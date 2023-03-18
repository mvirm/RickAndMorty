let favs = require('../utils/favs')

const getFavs = (req, res) => {
    try {
        if(favs.length) {
            res.status(200).json(favs)
        }
    }catch (error) {
        res.status(500).json({error: 'Error GET FAVS'})
    }
}

const addFav = (req, res) => {
    const { id, name, species, gender, image } = req.body;
    try {
        if(id&&name&&species&&gender&&image) {
            const character = {
                id,
                name,
                species,
                gender,
                image
            };
            favs.push(character);
            res.status(200).json(`El personaje ${character.name} ha sido guardado en favoritos`)
        }   
    } catch (error) {
        res.status(500).json({error: 'Error POST FAV'})    
    }
};
    
const deleteFav = (req, res) => {
    const { id } = req.params;
    try {
        if(!id) {
            throw new Error('Error DELETE FAV, falta ID')
        } else {
            let favsFiltered = favs.filter(fav => fav.id !== Number(id));
            if(favs.length === favsFiltered.length) {
            throw new Error('Error DELETE FAV, ID incorrecto');
            } else {
                favs = favsFiltered;
                res.status(200).json(`el personaje con el ID:${id} ha sido eliminado de favoritos`);
            } 
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
};

module.exports = {
    getFavs,
    addFav,
    deleteFav
};