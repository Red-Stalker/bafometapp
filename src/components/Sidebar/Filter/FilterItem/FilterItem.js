import React, { useState } from 'react';
import classes from "./FilterItem.module.css";
import { Slider } from 'primereact/slider';
import {connect} from "react-redux";
import {Button} from "primereact/button";

const FilterItem = (props) =>{
    const [distance, setDistance] = useState([2,props.filters.distance]);
    const [openNow, setOpenNow] = useState(props.filters.nowOpen);
    const [openAllTime, setOpenAllTime] = useState(props.filters.allTimeOpen);
    return(
        <>
        <div>
            <span className={classes.titleBlock}>
                Расстояние до меня
            </span>
            <div style={{marginBottom:10, paddingTop:10}}>
            <Slider value={distance} onChange={(e) => setDistance(e.value)} range className={classes.rangeSlider}/>
            <div className={classes.titleBlockRange}> Расстояние: [{distance[0]*100} м, {distance[1]*100} м]</div>
            </div>
        </div>
        <div>
            <span className={classes.titleBlock} >
                Время работы
            </span>
            <div className={classes.paddingBlock}>
                <span
                    className={props.filters.nowOpen?classes.active:''}
                    onClick={()=>{
                        props.getShops({
                            ...props.filters,
                            nowOpen: !props.filters.nowOpen
                        })
                    }}
                >
                    Открыто сейчас
                </span>
                <span
                    className={props.filters.allTimeOpen?classes.active:''}
                    onClick={()=>{
                        props.getShops({
                            ...props.filters,
                            allTimeOpen: !props.filters.allTimeOpen
                        })
                    }}
                >
                    Круглосуточно
                </span>
            </div>
            <Button className={classes.btn} onClick={()=>{
                props.getShops({
                    ...props.filters,
                    radius: distance[1]
                })
            }}>Применить фильтры</Button>
        </div>
        {/*<div>
            <span className={classes.titleBlock}>
                Меры предосторожности
            </span>
            <div className={classes.paddingBlock}>
                <span>
                    Вход в масках 
                </span>
                <span>
                    Сотрудники в масках
                </span>
                <span>
                Ограничение по количеству посетителей 
                </span>
                
            </div>
        </div>*/}
        </>
    )
}

export default FilterItem;