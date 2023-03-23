import { ADD_FAV, DELETE_FAV, FILTER, ORDER, GET_ALL_FAV} from '../redux/types'
import axios from 'axios';

export const addFav =  (personaje) => {
    //  axios.post('http://localhost:3001/rickandmorty/fav', personaje )
    //     return {
    //         type: ADD_FAV,
    //         payload: personaje
    //            }

     try {
        return async function(dispatch) {
             await axios.post('http://localhost:3001/rickandmorty/fav', personaje )

            return dispatch({
                type: ADD_FAV,
                payload: personaje
            })
        }
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteFav = (id) => {
    // axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
    // return {
    //     type: DELETE_FAV,
    //     payload: id
    // }
   
    try {
        return async function(dispatch) {
            await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            return dispatch({
                type: DELETE_FAV,
                payload: id
            })
        }
    } catch (error) {
        console.log(error.message);
    }
};
//agregado en async await
export const getAllFav = () => {
    try {
        return async function(dispatch) {
            const response = await axios.get(`http://localhost:3001/rickandmorty/fav`)
            return dispatch({
                type: GET_ALL_FAV,
                payload: response.data
            })
        }
    } catch (error) {
        console.log(error.message);
    }
};


export const filterCards = (status) => {
    return {
        type: FILTER,
        payload: status
    }
};

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
};