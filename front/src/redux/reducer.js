import { ADD_FAV, DELETE_FAV, FILTER, ORDER, GET_ALL_FAV } from "./types";

const initialState = {
    allCharacters: [],
    myFavorites: []
};

export default function reducerFav(state = initialState, action) {
    switch (action.type) {
        //agregado en async await
        case GET_ALL_FAV:
                return {
                    ...state,
                    allCharacters: [...action.payload],
                    myFavorites: [...action.payload],
                };    
        case ADD_FAV:
            const addFavorites = [...state.allCharacters, action.payload];
            return {
                ...state, 
                allCharacters: [...addFavorites],
                myFavorites: [...addFavorites],
            };
            // return {
            //     ...state,
            //     allCharacters: [...state.allCharacters, action.payload],
            //     myFavorites: [...state.myFavorites, action.payload]

            // };
        case DELETE_FAV:
            const deleteFavorites = state.allCharacters.filter(fav => fav.id !== action.payload);
            return {
                ...state,
                allCharacters: [...deleteFavorites],
                myFavorites:[...deleteFavorites],
            };
            // const filtBorrar = state.myFavorites.filter(fav => fav.id !== action.payload)
            // return {
            //     ...state,
            //     myFavorites: filtBorrar,
            //     allCharacters: state.myFavorites
            //};
        case FILTER:
            // if(action.payload === 'All') {
            //     return {
            //         ...state,
            //      myFavorites: state.allCharacters
            //     }
            // } else {
                return {
                    ...state,
                   myFavorites: state.allCharacters.filter(char => char.gender === action.payload)
                };
           // };
            
        case ORDER:
            const orderCopy = [...state.myFavorites]
            const ordered = orderCopy.sort((a, b) => {
                if(action.payload === 'Ascendente') {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }}
            );
            return {
                ...state,
                myFavorites: [...ordered]
            };
        // case "RESET":
        //     return {
        //         ...state,
        //         myFavorites: state.allCharacters,
        //     };    
        default:
            return {
                ...state
            }
    }
};