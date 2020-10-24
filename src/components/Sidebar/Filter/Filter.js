import React from "react"
import classes from "./Filter.module.css"
import SelectFilter from "./SelectFilter/SelectFilter";
import FilterItem from "./FilterItem/FilterItem";

const Filter = (props) =>{
    return(
        <div className={classes.inner}>
            <SelectFilter/>
            <div className={classes.items}>
                <FilterItem/>
               
            </div>
        </div>
    )
}

export default Filter;