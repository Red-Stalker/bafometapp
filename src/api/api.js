import * as axios from "axios";

const instanceWithToken = () => axios.create({
    withCredentials: true,
    baseURL: "http://bafomet.wellbe.club/api/",
    headers: {
        "Authorization": "Bearer "+localStorage.getItem("token")
    }
});

const instance = () => axios.create({
    withCredentials: true,
    baseURL: "http://bafomet.wellbe.club/api/",
});

export const authAPI = {
    me() {
        return instanceWithToken().get(`v1/users/auth/me/`);
    },
    login(email,password){
        return instance().post(`v1/users/auth/token/`, {email, password});
    },
    refreshToken(refresh = localStorage.getItem("refreshToken")){
        return instance().post(`v1/users/auth/token/refresh/`,{refresh})
    }/*,
    logout(){
        return instanceWithToken().post(`auth/logout/`);
    }*/
}

export const registrationAPI ={
    validateEmail(email){
        return instance().post(`v1/users/auth/registrate/send_email/`, {email})
    },
    validateOTP(email, otp){
        return instance().post(`v1/users/auth/registrate/confirm_email/`, {email, otp})
    },
    registration(email, name, password){
        return instance().post(`v1/users/auth/registrate/me/`, {email, name, password})
    }
}

export const gisAPI ={
    getShopsAround(q, cords=[60.6030454184265,56.83826863808909]){
        return instance().post(`v1/places/place/`, {cords,search_query:{q}})
    },
    getOnePlace(gis_id){
        return instance().post(`v1/placesВ/get_one_place/`,{'2gis_id': gis_id})
    },
    addToFavourite(gis_id){
        return instanceWithToken().post(`v1/places/add_to_favourite/`,{'2gis_id': gis_id})
    },
    getFavourite(){
        return instanceWithToken().get(`v1/places/get_favourite/`)
    }
}

/*
export const ipAPI = {
    getUserIp(){
        return axios.get("https://api.ipify.org/?format=json")
    },

    getUserLocation(ip_adress){
        return axios.get(`http://api.ipstack.com/${ip_adress}?access_key=06c847b7655aed16d882e1b3957b6a67&format=1`)
    }
}

export const placesAPI = {
    searchInCity(searchString, city_id){
        return  instance().get('/3.0/items',{
            params: {
              q: searchString,
              city_id: city_id,
              fields:'items.point,items.full_address_name,items.schedule,items.photos,items.contact_groups,items.rubrics,items.statistics,items.description,items.links',
              key: "rugtio3557",
              locale:'ru_RU',
              type:'branch'
            }
          })
    },

    getCity(lon, lat){
        return instance().get('/3.0/items',{
            params:{
                lon: lon,
                lat: lat,
                type: "adm_div.city",
                key: "rugtio3557"
            }
        })
    }
}*/
