import {registrationAPI} from "../api/api";

const SET_USER_EMAIL = "SET_USER_PHONE";
const SET_USER_OTP = "SET_USER_OTP";
const SET_USER_FINAL = "SET_USER_FINAL";
const SET_IS_REGISTRATED = "SET_IS_REGISTRATED";

let initialState = {
    email: null,
    validateEmail: false,
    validateOTP: false,
    isRegistrated: false
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_EMAIL:
            return {
                ...state,
                ...action.data
            }
        case SET_USER_OTP:
            return {
                ...state,
                validateOTP: true
            }
        case SET_USER_FINAL:
            return {
                ...initialState
            }
        case SET_IS_REGISTRATED:
            return {
                ...state,
                isRegistrated: true
            }
        default:
            return state
    }
}

const setUserEmail = (email, validateEmail) => ({type: SET_USER_EMAIL, data: {email, validateEmail}});

const setValidateOTP = () => ({type: SET_USER_OTP})

const setIsRegistrated = () => ({type: SET_IS_REGISTRATED})

export const setUserFinal = () => ({type: SET_USER_FINAL})

export const registration = (email, name, password) => (dispatch) => {
    registrationAPI.registration(email, name, password)
        .then(response => {
            if (response.data.status === true) {
                dispatch(setIsRegistrated())
            }
        }).catch((error) => {
            console.log("error registration")
    })
}

export const registrationEmail = (email) => (dispatch) => {
    registrationAPI.validateEmail(email)
        .then(response2 =>{
            if(response2.data.status === true){
                dispatch(setUserEmail(email, true))
            }
        }).catch((error) => {
        console.log("error validate email")
    })
}

export const registrationOTP = (email, otp) => (dispatch) => {
    registrationAPI.validateOTP(email,otp)
        .then(response => {
            if(response.data.status === true){
                dispatch(setValidateOTP())
            }
        }).catch((error) => {
        console.log("error validate OTP")
    })
}

export default registrationReducer;