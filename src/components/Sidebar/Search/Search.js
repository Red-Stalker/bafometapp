import React, {useEffect, useState} from "react"
import {InputText} from "primereact/inputtext";
import classes from "./Search.module.css"
import timeIco from "./bx_bx-time.svg"
import {gisAPI} from "../../../api/api";
import {setCoords} from "../../../redux/map-reducer";

const Search = (props) =>{
    const [showContent, setShowContent] = useState(false)

    const history = ['Продукты','Бошки','Пиво']

    useEffect(()=>{
        //функция получения истории
    },[])
    return(
        <div className={classes.inner}>
            <div className={classes.search}>
                <span className={`p-input-icon-left ${classes.searchSpan}`}>
                <i className="pi pi-search" />
                <InputText
                    onKeyPress={(e)=>{
                        if(e.key === "Enter"){
                            setShowContent(false)
                            props.setOnlySearch(false)
                            props.setCoordsFunc()
                            console.log(props.coords)
                            props.getShops(e.target.value)
                        }
                    }}
                    onClick={()=>{setShowContent(true)}}
                    placeholder="Поиск"
                />
            </span>
            </div>
            <div className={`${classes.contentInner} ${showContent? classes.active : ''}`}>
                <div className={classes.content}>
                    {history.map(p =>{
                        return(
                            <div
                                onClick={()=>{
                                    setShowContent(false)
                                    props.setOnlySearch(false)
                                    props.getShops(p)
                                }}
                                className={classes.item}
                            >
                                <img src={timeIco} alt="history"/>
                                <span>{p}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.clear}>
                    <span>Очистить историю</span>
                </div>
            </div>
        </div>
    )
}
export default Search;