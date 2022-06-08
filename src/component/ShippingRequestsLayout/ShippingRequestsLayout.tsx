import React from "react";
import { ShippingRequestsTable } from "../ShippingRequestsTable";
import { ShippingRequestsMap } from "../ShippingRequestsMap";
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
