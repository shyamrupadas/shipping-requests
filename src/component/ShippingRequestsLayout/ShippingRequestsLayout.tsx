import React from "react";
import { ShippingRequestsTable } from "../../features/ShippingRequestsTable";
import { ShippingRequestsMap } from "../../features/ShippingRequestsMap";
import "./ShippingRequestsLayout.css";

export const ShippingRequestsLayout = () => {
  return (
    <div className="layoutContainer">
      <div className="requestsContainer">
        <ShippingRequestsTable />
      </div>
      <div className="mapContainer">
        <ShippingRequestsMap />
      </div>
    </div>
  );
};
