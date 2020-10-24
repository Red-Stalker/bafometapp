import React, {useContext, useEffect, useState} from "react";
import classes from "./MapContainer.module.css";
import {load} from "@2gis/mapgl";
import {MapContext} from "./MapProvider";

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>
    },
    ()=>true,
)

/*const Map = (props) =>{
    const [mapInstance, setMapInstance] = useState(true);
    useEffect(()=>{
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: "b066ef4f-8a6d-4b72-8f1c-2eba6a809a1f"
            });
        });
        return () => map && map.destroy();
    }, [])

    return(
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    )
}*/

const MapGL = () =>{
    const [_, setMapInstance] = useContext(MapContext);;
    useEffect(()=>{
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: "b066ef4f-8a6d-4b72-8f1c-2eba6a809a1f"
            });
            setMapInstance(map);
        });

        // Destroy the map, if Map component is going to be unmounted
        return () => map.destroy();
    }, [])

    return(
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    )
}

export default MapGL;