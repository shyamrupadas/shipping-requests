import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { POINTS } from "../../DB";

export const ShippingRequestsMap = () => {
  return (
    <MapContainer
      center={[55.702868, 37.530865]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {POINTS.map((point) => (
        <Marker position={point.position}>
          <Popup>{point.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
