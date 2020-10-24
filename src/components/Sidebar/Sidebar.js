import React from "react"
import CardCompany from './cardCompany/CardCompany'
import { InputText } from 'primereact/inputtext';
import classes from './Sidebar.module.css';


const Sidebar = (props) =>{
    return(
        <div className={classes.Sidebar}>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>
            <CardCompany/>
        </div>
    )
}

export default Sidebar;