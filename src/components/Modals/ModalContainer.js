import React, {useState} from "react"
import classes from "./ModalContainer.module.css"
import ModalLogIn from "./ModalLogIn";
import ModalRegistration from "./ModalRegistration";
import {TabPanel, TabView} from "primereact/tabview";

const ModalContainer = (props) =>{
    const [activeIndex, setActiveIndex] = useState(0)
    return(
        <div className={classes.modalInner}>
            <div className={classes.content}>
                <div className={classes.btnSidebarClose} onClick={()=>{
                    props.closeModal()
                }}><i className="pi pi-times"></i></div>
                <div className={classes.tabViewInner}>
                    <TabView className={classes.tabView} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                        <TabPanel header="Вход">
                            <ModalLogIn closeModal={props.closeModal}/>
                        </TabPanel>
                        <TabPanel header="Регистрация">
                            <ModalRegistration closeModal={props.closeModal}/>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
    )
}

export default ModalContainer;