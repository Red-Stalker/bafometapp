import React from "react"
import CardCompany from './cardCompany/CardCompany'
import { InputText } from 'primereact/inputtext';
import classes from './Sidebar.module.css';
import Tabs from './Tabs/Tabs'
import Search from "./Search/Search";
import FindShop from "./FindShop/FindShop";
import InfoShop from "./InfoShop/InfoShop";


const Sidebar = (props) =>{
    return(
        <div className={classes.Sidebar}>
            <Search/>
            <div className={classes.content}>
                <FindShop/>
                <InfoShop/>
            </div>


        </div>
    )
}

export default Sidebar;