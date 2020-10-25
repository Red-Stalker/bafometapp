import React, { useState } from 'react';
import classes from "./FilterItem.module.css";
import { Slider } from 'primereact/slider';

const FilterItem = (props) =>{
    const [value4, setValue4] = useState([20,80]);
    return(
        <>
        <div>
            <span className={classes.titleBlock}>
                Расстояние до меня
            </span>
            <div style={{marginBottom:10, paddingTop:10}}>
            <Slider value={value4} onChange={(e) => setValue4(e.value)} range className={classes.rangeSlider}/>
            <div className={classes.titleBlockRange}> Расстояние: [{value4[0]}, {value4[1]}]</div>
            </div>
        </div>
        <div>
            <span className={classes.titleBlock} >
                Время работы
            </span>
            <div className={classes.paddingBlock}>
                <span>
                    Открыто сейчас
                </span>
                <span>
                    Круглосуточно
                </span> 
                <span>
                    Указать время 
                </span>               
            </div>
        </div>
        <div>
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
        </div>
        </>
    )
}
export default FilterItem;