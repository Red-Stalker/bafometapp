import React, {useContext, useEffect, useState} from "react";
import classes from "./CardCompany.module.css";
import {load} from "@2gis/mapgl";




const CardCompany = () => {
    return(
        <div className={classes.cardComp}>
            <div className={classes.actionCards}>
                <div className={classes.actionCard}>
                    
                </div>  
                <div className={classes.actionCard}>
                          
                </div>
                <div className={classes.actionCard}>
                          
                </div>
            </div>
            
        </div>
    )
};

export default CardCompany;