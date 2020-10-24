import classes from "./App.module.css"
import React from "react";
import Map from "./components/MapContainer";
import MapGL from "./components/MapContainer";
import MoveMapButton from "./components/MoveMapButton";

const App = (props) => {
  return (
      <div>
          <div style={{ padding: '0 0 6px' }}>
              Drag the map and then click the button <MoveMapButton/>
          </div>
          <br />
          <div style={{ width: '100%', height: 250 }}>
              <MapGL />
          </div>
      </div>
  );
}

export default App;
