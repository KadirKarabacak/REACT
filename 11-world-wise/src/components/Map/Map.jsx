import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

function Map() {
  // UseNavigate simply returns a function, just write which path u want to go. Same as NavLink feature.
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  // useSearchParams is a Router property which gives us URL params and query strings.
  const [searchParams, setSearchParams] = useSearchParams();
  // It returns an object includes our data, and we use it to get data like this.
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    // Onclick map, navigate to form
    <div className={styles.mapContainer}>
      {/* position must be an array */}
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
