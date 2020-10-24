import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import registrationReducer from "./registration-reducer";

let reducers = combineReducers({
    auth: authReducer,
    registration: registrationReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store

export default store