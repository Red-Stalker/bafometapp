import React from "react"
import classes from "./Filter.module.css"
import SelectFilter from "./SelectFilter/SelectFilter";
import FilterItem from "./FilterItem/FilterItem";
import {connect} from "react-redux";

const Filter = (props) =>{
    return(
        <div className={classes.inner}>
            <SelectFilter
                filters={props.filters}
                getShops={props.getShops}
            />
            <div className={classes.items}>
                <FilterItem
                    filters={props.filters}
                    getShops={props.getShops}
                />
            </div>
        </div>
    )
}

export default Filter;