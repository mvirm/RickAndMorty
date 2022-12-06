


export const addFav = (personaje) => {
    return{
        type: 'ADD_FAV',
        payload: personaje
    }
};

export const deleteFav = (id) => {
    return{
        type: 'DELETE_FAV',
        payload: id
    }
};