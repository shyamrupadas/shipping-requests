import React from "react";
import { ShippingRequestsTable } from "../ShippingRequestsTable";
import { ShippingRequestsMap } from "../ShippingRequestsMap";
import "./ShippingRequestsLayout.css";

export const ShippingRequestsLayout = () => {
  return (
    <div className="layoutContainer">
      <div className="left-side">
        <ShippingRequestsTable />
      </div>
      <div className="right-side">
        <ShippingRequestsMap />
      </div>
    </div>
  );
};
