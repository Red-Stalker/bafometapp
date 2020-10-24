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
          <div className={classes.sidebarInner}>
              {openSideBar &&
              <div className={classes.content}>
                  <Sidebar/>
                  Drag the map and then click the button <MoveMapButton/>
              </div>
              }
              <div onClick={()=>{
                  setOpenSideBar(!openSideBar)
              }} className={classes.btnSidebar}>Open Sidebar</div>
          </div>
          <div className={classes.map}>
              <MapGL />
          </div>
      </div>
  );
}

export default App;
