import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Marker from "react-leaflet-enhanced-marker";
import TestMarker from "./TestMarker";

import "./styles.scss";

export default function App() {
  const onClick = () => {
    console.log("Test");
  };

  const coordinates = [
    { long: 1.8397, lat: -41, status: 1 },
    { long: 10.8397, lat: -41, status: 0 },
    { long: -22.8397, lat: -41, status: 0 },
    { long: -10.8397, lat: -62, status: 1 },
    { long: -10.8397, lat: -50, status: 1 },
    { long: 1.8397, lat: 58, status: 1 },
    { long: 0, lat: 0, status: 1 }
  ];

  return (
    <div>
      <MapContainer
        style={{ height: 900, width: 1500 }}
        className="markercluster-map"
        center={[0.0, 0.0]}
        zoom={4}
        maxZoom={4}
        minZoom={4}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
      >
        >
        <TileLayer
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="https://eggharbormarina.com/wp-content/uploads/Egg-Harbor-Marina-Map.jpg"
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          tileSize={1400}
          continuousWorld={false}
          maxBounds={true}
          noWrap={true}
        />
        <MarkerClusterGroup>
          {/* <Marker
            icon={<TestMarker color="green" />}
            position={[1.8397, -31]}
            eventHandlers={{ click: onClick }}
          /> */}
          {/* <Marker icon={<TestMarker />} position={[52.2297, 21.0122]} /> */}
          {/* <Marker icon={<TestMarker available />} position={[11.5074, -31]} /> */}

          {coordinates.map((item) => {
            return (
              <Marker
                icon={<TestMarker available={item.status} />}
                position={[item.long, item.lat]}
                eventHandlers={{ click: onClick }}
              />
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
