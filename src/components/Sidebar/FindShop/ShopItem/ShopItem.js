import React from "react"
import classes from "./ShopItem.module.css"
import starFullIco from './Vector.svg'
import starIco from './Vector2.svg'
import img from './Ellipse 7.png'

const ShopItem = (props) =>{
    return(
        <div className={classes.inner}>
            <div className={classes.row1}>
                <div className={classes.column}>
                    <div className={classes.row}>
                        <div className={classes.title}>Окей</div>
                        <div className={classes.position}>в 500 метрах</div>
                    </div>
                        <div className={classes.row}><div className={classes.type}>Гипермаркет</div><div className={classes.rub}>₽</div></div>
                </div>
                <div>
                    <div className={classes.time}>Ежедневно с 10:00 до 22:00</div>
                    <div className={classes.timeState}>Открыто</div>
                </div>
                <div className={classes.adress }>Радуга Парк, Репина, 94, Екатеринбург</div>
            </div>
            <div className={classes.row2}>
                <img className={classes.img} src={img} alt="logo"/>
                <div className={classes.row}>
                    <img className={classes.star} src={starFullIco} alt="starFull"/>
                    <img className={classes.star} src={starFullIco} alt="starFull"/>
                    <img className={classes.star} src={starFullIco} alt="starFull"/>
                    <img className={classes.star} src={starFullIco} alt="starFull"/>
                    <img className={classes.star} src={starIco} alt="star"/>
                </div>
                <div className={classes.maskStatus}>Вход только в маске</div>
            </div>
        </div>
    )
}

export default ShopItem;