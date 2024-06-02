import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCities } from "../../contexts/CitiesContext";
import styles from "./Map.module.css";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
    useMapEvents,
} from "react-leaflet";
import { useGeolocation } from "../../hooks/useGeolocation";
import Button from "../Button/Button";
import { useUrlPosition } from "../../hooks/useUrlPosition";

function Map() {
    const { cities } = useCities();
    const [mapPosition, setMapPosition] = useState([40, 0]);
    const {
        isLoading: isLoadingPosition,
        position: geolocationPosition,
        getPosition,
    } = useGeolocation();

    // Created our own hook to reuse into form
    const [mapLat, mapLng] = useUrlPosition();

    // After a clicked city and we go back map must be stay at tha last position of city so ->
    useEffect(
        function () {
            if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
        },
        [mapLat, mapLng]
    );

    // To sync map with our location use another effect.
    useEffect(
        function () {
            if (geolocationPosition)
                setMapPosition([
                    geolocationPosition.lat,
                    geolocationPosition.lng,
                ]);
        },
        [geolocationPosition]
    );

    return (
        <div className={styles.mapContainer}>
            <Button type="position" onClick={getPosition}>
                {isLoadingPosition ? "Loading..." : "Use your position"}
            </Button>

            <MapContainer
                className={styles.map}
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map(city => (
                    <Marker
                        position={[city.position.lat, city.position.lng]}
                        key={city.id}
                    >
                        <Popup>
                            <span>{city.emoji}</span>
                            <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                ))}
                {/* Using mapPosition which we set into useState, it keeps last city coords */}
                <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>
        </div>
    );
}

// To make map dynamic on location change
function ChangeCenter({ position }) {
    // useMap is leaflet hook
    const map = useMap();
    map.setView(position);
    return null;
}

// Handle Map Click by Leaflet
function DetectClick() {
    // UseNavigate simply returns a function, just write which path u want to go, Opening form onclick. Same as NavLink feature.
    const navigate = useNavigate();

    // Leaflet map event handler like click.
    useMapEvents({
        // Remember onClick we want to open form with useNavigate router feature.
        click: e => {
            // e has property latlng which holds latitude and longitude, so we can use on query
            // console.log(e);
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        },
    });
}

export default Map;
