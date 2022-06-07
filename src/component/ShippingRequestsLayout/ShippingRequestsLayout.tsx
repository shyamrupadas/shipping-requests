import React from "react";
import { ShippingRequestsTable } from "../ShippingRequestsTable";
import { ShippingRequestsMap } from "../ShippingRequestsMap";

export const ShippingRequestsLayout = () => {
  return (
    <div>
      <ShippingRequestsTable />
      <ShippingRequestsMap />
    </div>
  );
};
