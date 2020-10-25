import React from "react"
import classes from "./ShopItem.module.css"
import starFullIco from './Vector.svg'
import starIco from './Vector2.svg'
import img from './Ellipse 7.png'

const ShopItem = (props) =>{
    return(
        <div
            onClick={()=>{
                props.selectShop(props.shop)
            }}
            className={classes.inner}
        >
            <div className={classes.row1}>
                <div className={classes.column}>
                    <div className={classes.row}>
                        <div className={classes.title}>{props.shop.name}</div>
                    </div>
                        <div className={classes.row}><div className={classes.type}>{props.shop.rubrics[0].name}</div><div className={classes.rub}>₽</div></div>
                </div>
                <div>
                    <div className={classes.time}>Ежедневно с {props.shop.schedule.Fri.working_hours[0].from} до {props.shop.schedule.Fri.working_hours[0].to}</div>
                    <div className={classes.timeState}>Открыто</div>
                </div>
                <div className={classes.adress }>{props.shop.full_address_name}</div>
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