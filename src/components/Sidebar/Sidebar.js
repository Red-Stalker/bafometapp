import React, {useState} from "react"
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
import {getShops, setOpenInfo, setShop} from "../../redux/map-reducer";


const Sidebar = (props) =>{
    const [mapInstance] = React.useContext(MapContext);
    const [coords, setCoords] = useState([null,null])

    const setCoordsFunc = () => {
        if (!navigator.geolocation) {
            alert("Браузер не поддерживает геолокацию")
        } else {
            navigator.geolocation.getCurrentPosition((pos) => setCoords([pos.coords.longitude, pos.coords.latitude]), mapInstance.error);
        }
    }

    const [onlySearch, setOnlySearch] = useState(true)
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
            <Search
                setOnlySearch={setOnlySearch}
                setCoordsFunc={setCoordsFunc}
                coords={coords}
                getShops={props.getShops}
                filters={props.filters}
            />
            <div className={onlySearch?classes.hide:''}>
                <div className={classes.filters}>
                    <div onClick={()=>{setOpenFilter(!openFilter)}} className={classes.filtersIcoAndText}><img className={classes.fitersImg} src={fitlresIco} alt="fitlers"/><div className={classes.fitlersText}>Фильтры</div></div>
                    <div className={classes.countData}>Всего найдено 3965</div>
                </div>
                <div className={classes.content}>
                    {openFilter &&
                        <Filter
                            getShops={props.getShops}
                            filters={props.filters}
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
                    {openInfoShop &&
                        <InfoShop
                            infoForShop={infoForShop}
                            shop={props.shop}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    shops: state.map.shops,
    shop: state.map.shop,
    filters: state.map.filters
})

export default connect(mapStateToProps,{getShops, setShop})(Sidebar);