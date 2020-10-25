import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import registrationReducer from "./registration-reducer";
import mapReducer from "./map-reducer";

let reducers = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    map: mapReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store

export default store