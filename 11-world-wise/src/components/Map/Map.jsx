import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../../contexts/CitiesContext";

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  // useSearchParams is a Router property which gives us URL params and query strings.
  const [searchParams] = useSearchParams();
  // It returns an object includes our data, and we use it to get data like this.
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  // After a clicked city and we go back map must be stay at tha last position of city so ->
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  return (
    <div className={styles.mapContainer}>
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
        {cities.map((city) => (
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
  // UseNavigate simply returns a function, just write which path u want to go. Same as NavLink feature.
  const navigate = useNavigate();

  // Leaflet map event handler like click.
  useMapEvents({
    // Remember onClick we want to open form with useNavigate router feature.
    click: (e) => {
      // e has property latlng which holds latitude and longitude, so we can use on query
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
