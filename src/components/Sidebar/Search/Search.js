import React, {useState} from "react"
import {InputText} from "primereact/inputtext";
import classes from "./Search.module.css"
import timeIco from "./bx_bx-time.svg"

const Search = (props) =>{
    const [showContent, setShowContent] = useState(false)
    return(
        <div className={classes.inner}>
            <div className={classes.search} onFocus={()=>{setShowContent(true)}} onBlur={()=>{setShowContent(false)}}>
                <span className={`p-input-icon-left ${classes.searchSpan}`}>
                <i className="pi pi-search" />
                <InputText placeholder="Поиск" />
            </span>
            </div>
            <div className={`${classes.contentInner} ${showContent? classes.active : ''}`}>
                <div className={classes.content}>
                    <div className={classes.item}>
                        <img src={timeIco} alt="history"/>
                        <span>asdasd</span>
                    </div>
                    <div className={classes.item}>
                        <img src={timeIco} alt="history"/>
                        <span>asdasd</span>
                    </div>
                </div>
                <div className={classes.clear}>
                    <span>Очистить историю</span>
                </div>
            </div>
        </div>
    )
}
export default Search;