import {gisAPI} from "../api/api";

const SET_COORDS = "SET_COORDS"
const SET_SHOPS = "SET_COORDS"
const SET_SHOP = "SET_SHOP"
const SET_OPEN_INFO = "SET_SHOP"

let initialState = {
    coords: [[60.6030454184265,56.83826863808909]],
    shops: [],
    shop: null

}

const mapReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_SHOPS:{
            return {
                ...state,
                shops: action.shops
            }
        }
        case SET_SHOP:{
            return {
                ...state,
                shop: action.shop
            }
        }
        case SET_COORDS:{
            return {
                ...state,
                coords: action.coords
            }
        }
        default:
            return state
    }
}

const setCoords = (coords) => ({type: SET_COORDS, coords})

const setShops = (shops) => ({type: SET_SHOPS, shops})

const setShopToState = (shop) => ({type: SET_SHOP, shop})

/*export const setOpenInfo = () =>({type: SET_OPEN_INFO})*/

export const setShop = (shop) => (dispatch) =>{
    dispatch(setShopToState(shop))
}

/*export const getShops = (q) => (dispatch) =>{
    gisAPI.getShopsAround(q)
        .then(response =>{
            if(response.data.status === true){
                let coords=[];
                response.data.items.forEach(i =>{
                    coords.push([i.point.lon, i.point.lat])
                })
                dispatch(setCoords(coords))
            }
        })
}*/

export const getShops = (q) => (dispatch) =>{
    gisAPI.getShopsAround(q)
        .then(response =>{
            if(response.data.status === true){
                /*let coords=[];
                response.data.items.forEach(i =>{
                    coords.push([i.point.lon, i.point.lat])
                })
                dispatch(setCoords(coords))*/
                dispatch(setShops(response.data.items))
            }
        })
}

export const getFavShops = () => (dispatch) =>{
    gisAPI.getFavourite()
        .then(response =>{
            if(response.data.status === true){
                dispatch(setShops(response.data.items))
            }
        })
}

export default mapReducer;