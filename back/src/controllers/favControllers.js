let {favs} = require('../utils/favs')

const getFavs = (favs) => {
 if(!favs.length) {
     throw new error('no hay favoritos')
 } else {
    return favs
 }
}

const addFav = (id, name, species, gender, image) => {
 if(!id||!name ||!species||!gender||!image) throw new Error('faltan datos para agregar un favorito')
    let character = {
    id, 
    name, 
    species,
    gender,
    image
    }       
    favs.push(character);
    return character
}   
    
const deleteFav = (id) => {
        if(!id) {
            throw new Error('Error DELETE FAV, falta ID')
        } else {
            let favsFiltered = favs.filter(fav => fav.id !== Number(id));
            if(favs.length === favsFiltered.length) {
            throw new Error('Error DELETE FAV, ID incorrecto');
            } else {
                favs = favsFiltered;
                return `el personaje con el ID:${id} ha sido eliminado de favoritos`;
            } 
        }
    }; 

module.exports = {
    getFavs,
    addFav,
    deleteFav
};