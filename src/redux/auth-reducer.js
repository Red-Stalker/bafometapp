import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTHORIZATION = "SET_AUTHORIZATION";

let initialState = {
    id: null,
    email: null,
    name: null,
    secondName: null,
    isAuth: false,
    authorization: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTHORIZATION:{
            return {
                ...state,
                authorization: action.authorization
            }
        }
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

const setAuthUserData = (id, email, name, secondName, isAuth) => ({type: SET_USER_DATA, data:{id, email, name, secondName, isAuth}})

const setAuthorization = (authorization) => ({type: SET_AUTHORIZATION, authorization})

export const getAuthUserData = () => (dispatch) =>{
    authAPI.me()
        .then(response => {
            if(response.status === 200){
                dispatch(setAuthUserData(
                    response.data.id,
                    response.data.email,
                    response.data.name,
                    response.data.second_name,
                    true
                ));
            }
        }).catch( (error) => {
        console.log("Error me")
    });
}

export const login = (email, password) => (dispatch) =>{
    dispatch(setAuthorization(true))
    authAPI.login(email, password)
        .then(response => {
            console.log(response)
            if(response.status === 200){
                console.log(response.data.access)
                localStorage.setItem("token", response.data.access);
                localStorage.setItem("refreshToken", response.data.refresh);
                dispatch(getAuthUserData())
                dispatch(setAuthorization(false))
            }
        }).catch( (error) => {
        dispatch(setAuthorization(false))
        console.log("error login")
    })
}

export default authReducer;