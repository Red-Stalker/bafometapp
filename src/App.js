import classes from "./App.module.css"
import React, {useState} from "react";
import Map from "./components/Map/MapContainer";
import MapGL from "./components/Map/MapContainer";
import MoveMapButton from "./components/Map/MoveMapButton";
import Sidebar from "./components/Sidebar/Sidebar";
import CardCompany from "./components/Sidebar/cardCompany/CardCompany";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ModalContainer from "./components/Modals/ModalContainer";
import {connect} from "react-redux";
import {MapContext} from "./components/Map/MapProvider";

const App = (props) => {
    const [mapInstance] = React.useContext(MapContext);
    const [openSideBar, setOpenSideBar] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const closeModal = () =>{
        setOpenModal(false)
    }

  return (
      <div className={classes.appInner}>
          {openSideBar &&
              <div className={classes.sidebarInner}>
                  <div className={classes.content}>
                      <Sidebar/>
                      <div className={classes.btnSidebarClose} onClick={()=>{
                          setOpenSideBar(false)
                      }}><i className="pi pi-times"></i></div>
                  </div>
              </div>
          }

          {!openSideBar &&
              <div onClick={()=>{
                  setOpenSideBar(true)
              }} className={classes.btnSidebarOpen}><i className="pi pi-bars"></i></div>
          }

          {!props.isAuth &&
          <div onClick={()=>{setOpenModal(true)}} className={classes.login}><i className="pi pi-arrow-circle-right"></i><span>Войти</span></div>
          }

          <div className={classes.map}>
              <MapGL />
          </div>

          <div onClick={()=>{
              if (!navigator.geolocation) {
                  alert("Нету координат")
              } else {
                  navigator.geolocation.getCurrentPosition((pos)=> alert(`${pos.coords.longitude} ${pos.coords.latitude}`), mapInstance.error);
              }
          }} className={classes.coordsMe}>Координаты мои</div>

          {openModal &&
            <ModalContainer closeModal={closeModal}/>
          }
      </div>
  );
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{})(App);
