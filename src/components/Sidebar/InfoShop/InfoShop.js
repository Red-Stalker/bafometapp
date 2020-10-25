import React from "react"
import classes from "./InfoShop.module.css"
import CardCompany from "../cardCompany/CardCompany";
import Tabs from "../Tabs/Tabs";

const InfoShop = (props) =>{
    return(
        <div className={classes.inner}>
            <CardCompany shop={props.shop}/>
            <Tabs shop={props.shop}/>
        </div>
    )
}

export default InfoShop;
