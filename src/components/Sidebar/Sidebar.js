import React from "react"
import CardCompany from './cardCompany/CardCompany'
import { InputText } from 'primereact/inputtext';
import classes from './Sidebar.module.css';
import Tabs from './Tabs/Tabs'
import Search from "./Search/Search";
import FindShop from "./FindShop/FindShop";
import InfoShop from "./InfoShop/InfoShop";
import fitlresIco from "./Group 5.svg"
import Filter from "./Filter/Filter"


const Sidebar = (props) =>{
    return(
        <div className={classes.Sidebar}>
            <Search/>
            <div className={classes.filters}>
                <div className={classes.filtersIcoAndText}><img className={classes.fitersImg} src={fitlresIco} alt="fitlers"/><div className={classes.fitlersText}>Фильтры</div></div>
                <div className={classes.countData}>Всего найдено 3965</div>
            </div>
            <div className={classes.content}>
                <Filter/>
                <FindShop/>
                <InfoShop/>
            </div>


        </div>
    )
}

export default Sidebar;