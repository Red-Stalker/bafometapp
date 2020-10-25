import React from "react"
import classes from "./FindShop.module.css"
import SelectShop from "./SelectShop/SelectShop";
import ShopItem from "./ShopItem/ShopItem";

const FindShop = (props) =>{
    return(
        <div className={classes.inner}>
            <SelectShop/>
            <div className={classes.items}>
                {props.shops.map(shop =>{
                        return(
                            <ShopItem
                                shop={shop}
                                selectShop={props.selectShop}
                                setShop={props.setShop}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FindShop;