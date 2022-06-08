import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCurrentRequestPoints,
  selectCurrentRequest,
  selectCurrentRequestPoints,
} from "../ShippingRequestsTable/shippingRequestsListSlice";

export const ShippingRequestsMap = () => {
  const currentRequest = useAppSelector(selectCurrentRequest);
  const currentRequestPoints = useAppSelector(selectCurrentRequestPoints);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentRequest)
      dispatch(getCurrentRequestPoints(currentRequest.pointIds));
  }, [currentRequest?.pointIds]);

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
      {currentRequestPoints.map((point) => (
        <Marker key={point.id} position={point.position}>
          <Popup>{point?.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
