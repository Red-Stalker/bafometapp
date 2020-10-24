import React, {useContext, useEffect, useState} from "react";
import classes from "./MapContainer.module.css";
import {load} from "@2gis/mapgl";
import {MapContext} from "./MapProvider";
import "./MapContainer.css"

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>
    },
    ()=>true,
)

const controlContent = `
                <div class="buttonRoot" id="find-me">
                    <button class="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="currentColor"
                                d="M17.89 26.27l-2.7-9.46-9.46-2.7 18.92-6.76zm-5.62-12.38l4.54 1.3 1.3 4.54 3.24-9.08z"
                            />
                        </svg>
                    </button>
                </div>
                <p id="status"></p>
            `;

const MapGL = () =>{
    const [_, setMapInstance] = useContext(MapContext);;
    useEffect(()=>{
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [60.6030454184265,56.83826863808909],
                zoom: 13,
                key: "b066ef4f-8a6d-4b72-8f1c-2eba6a809a1f",
            });

            const control = new mapglAPI.Control(map, controlContent, {
                position: 'topRight',
            });

            const status = control.getContainer().querySelector('#status');
            let circle;

            function success(pos) {
                const center = [pos.coords.longitude, pos.coords.latitude];

                status.textContent = '';
                if (circle) {
                    circle.destroy();
                }

                circle = new mapglAPI.CircleMarker(map, {
                    coordinates: center,
                    radius: 14,
                    color: '#0088ff',
                    strokeWidth: 4,
                    strokeColor: '#ffffff',
                    stroke2Width: 6,
                    stroke2Color: '#0088ff55',
                });
                map.setCenter(center);
                map.setZoom(16);
            }

            function error() {
                status.textContent = 'Unable to retrieve your location';
            }

            function geoFindMe() {
                if (!navigator.geolocation) {
                    status.textContent = 'Geolocation is not supported by your browser';
                } else {
                    status.textContent = 'Locating…';
                    navigator.geolocation.getCurrentPosition(success, error);
                }
            }

            control
                .getContainer()
                .querySelector('#find-me')
                .addEventListener('click', geoFindMe);

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