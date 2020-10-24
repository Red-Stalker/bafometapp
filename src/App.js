import classes from "./App.module.css"
import React from "react";
import Map from "./components/MapContainer";

const App = (props) => {
  return (
    <div style={{ width: '100%', height: 400 }}>
       <Map/>
    </div>
  );
}

export default App;
