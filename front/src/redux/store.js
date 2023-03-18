import { createStore, compose, applyMiddleware } from "redux";
import  thunkMiddleware  from "redux-thunk";
import reducerFav from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
/*const store = createStore(reducerFav,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware),
);*/
const store = createStore(reducerFav, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;
