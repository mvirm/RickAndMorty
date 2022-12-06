import { ADD_FAV, DELETE_FAV } from "./types";

const initialState = {
    myFavorites: []
};

export default function reducerFav(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
            case DELETE_FAV:
                const filtro = state.myFavorites.filter(fav => fav.id !== action.payload)
                return {
                    ...state,
                    myFavorites: filtro
                }
        default:
            return state;
    }
}