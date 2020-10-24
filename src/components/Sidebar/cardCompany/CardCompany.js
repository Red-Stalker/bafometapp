import React, {useContext, useEffect, useState} from "react";
import classes from "./CardCompany.module.css";
import {load} from "@2gis/mapgl";
import {ReactComponent as LogoSave} from "./save.svg";
import {ReactComponent as LogoShare} from "./share.svg" 
import {ReactComponent as LogoGo} from "./go.svg";
import {ReactComponent as LogoStarFull} from "./star1.svg";
import {ReactComponent as LogoStar} from "./star2.svg";





const CardCompany = () => {
    return(
        <div className={classes.cardComp}>
            <div className={classes.actionCards}>
                <span className={classes.actionCard}>
                    <LogoSave/>
                    Сохранить
                </span>
                <span className={classes.actionCard}>
                    <LogoShare/>
                    Отправить
                </span>
                <span className={classes.actionCard}>
                    <LogoGo/>
                    Проехать
                </span>
            </div>
            
        </div>
    )
};

export default CardCompany;