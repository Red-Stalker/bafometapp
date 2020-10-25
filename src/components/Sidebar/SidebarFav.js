import React, {useEffect, useState} from "react"
import CardCompany from './cardCompany/CardCompany'
import { InputText } from 'primereact/inputtext';
import classes from './Sidebar.module.css';
import Tabs from './Tabs/Tabs'
import Search from "./Search/Search";
import FindShop from "./FindShop/FindShop";
import InfoShop from "./InfoShop/InfoShop";
import fitlresIco from "./Group 5.svg"
import Filter from "./Filter/Filter"
import {MapContext} from "../Map/MapProvider";
import {connect} from "react-redux";
import {getFavShops, getShops, setOpenInfo, setShop} from "../../redux/map-reducer";
import {gisAPI} from "../../api/api";


const Sidebar = (props) =>{
    useEffect(()=>{
        props.getFavShops()
    },[])

    const [openFilter, setOpenFilter] = useState(false)
    const [openFindShop, setOpenFindShop] = useState(true)
    const [openInfoShop, setOpenInfoShop] = useState(true)

    const [infoForShop, setInfoForShop] = useState(null)

    const selectShop = (shop) =>{
        setOpenInfoShop(true)
        // функция запроса данных магазина по id
        props.setShop(shop)
    }
    return(
        <div className={classes.Sidebar}>
            <div className={classes.content}>
                {openInfoShop &&
                <InfoShop
                    infoForShop={infoForShop}
                    shop={props.shop}
                />
                }
                {openFindShop &&
                    <FindShop
                        selectShop={selectShop}
                        shops={props.shops}
                        setShop={props.setShop}
                        shop={props.shop}
                    />
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    shops: state.map.shops,
    shop: state.map.shop
})

export default connect(mapStateToProps,{getShops, setShop, getFavShops})(Sidebar);