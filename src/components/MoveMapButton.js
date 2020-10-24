import React from "react"
import {MapContext} from "./MapProvider";

const MoveMapButton = () => {
    const [mapInstance] = React.useContext(MapContext);

    const setInitialCenter = React.useCallback(() => {
        if (mapInstance) {
            mapInstance.setCenter([55.31878, 25.23584]);
        }
    }, [mapInstance]);

    return (
        <button style={{ padding: '4px 10px' }} onClick={setInitialCenter}>
            Set initial center
        </button>
    );
};

export default MoveMapButton;