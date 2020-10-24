import classes from "./App.module.css"
import React, {useState} from "react";
import Map from "./components/Map/MapContainer";
import MapGL from "./components/Map/MapContainer";
import MoveMapButton from "./components/Map/MoveMapButton";
import Sidebar from "./components/Sidebar/Sidebar";

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
                      }}>Close</div>
                  </div>
              </div>
          }
          {!openSideBar &&
              <div onClick={()=>{
                  setOpenSideBar(true)
              }} className={classes.btnSidebarOpen}>Open</div>
          }
          <div className={classes.map}>
              <MapGL />
          </div>
      </div>
  );
}

export default App;
