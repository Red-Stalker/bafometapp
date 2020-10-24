import React from "react"
import classes from "./InfoShop.module.css"
import CardCompany from "../cardCompany/CardCompany";
import Tabs from "../Tabs/Tabs";

const InfoShop = () =>{
    return(
        <div className={classes.inner}>
            <CardCompany/>
            <Tabs/>
        </div>
    )
}

export default InfoShop;
