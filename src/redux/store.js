import { createStore, applyMiddleware } from "redux";
import  thunkMiddleware  from "redux-thunk";
import reducerFav from './reducer';

const store = createStore(reducerFav,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware),
);

export default store;
