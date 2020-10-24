import * as axios from "axios";

const instanceWithToken = () => axios.create({
    withCredentials: true,
    baseURL: "http://api.wellbe.club/v1/",
    headers: {
        "access-token": localStorage.getItem("token")
    }
});

const instance = () => axios.create({
    withCredentials: true,
    baseURL: "http://api.wellbe.club/v1/",
});

export const authAPI = {
    signIn(email,password){
        return  instance().post(`auth/sign_in`, {email, password});
    }
}

export const registrationAPI = {
    signIn(email, password, password_confirmation, confirm_success_url = "https://formik.org/"){
        return  instance().post(`auth/`, {email, password, password_confirmation, confirm_success_url });
    }
}