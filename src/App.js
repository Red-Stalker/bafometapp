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

const App = (props) => {
    const [openSideBar, setOpenSideBar] = useState(false)
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
          <div className={classes.map}>
              <MapGL />
          </div>
      </div>
  );
}

export default App;
