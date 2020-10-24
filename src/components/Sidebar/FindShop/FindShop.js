import React from "react"
import classes from "./FindShop.module.css"
import SelectShop from "./SelectShop/SelectShop";
import ShopItem from "./ShopItem/ShopItem";

const FindShop = (props) =>{
    return(
        <div className={classes.inner}>
            <SelectShop/>
            <div className={classes.items}>
                <ShopItem/>
                <ShopItem/>
            </div>
        </div>
    )
}

export default FindShop;