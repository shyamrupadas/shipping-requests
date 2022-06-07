import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import "./ShippingRequestsTable.css";
import { ORDERS } from "../../DB";

interface DataType {
  id: string;
  title: string;
  pointIds: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Points",
    key: "pointIds",
    dataIndex: "pointIds",
    render: (_, { pointIds }) => (
      <>
        {pointIds.map((id) => (
          <span>{id}</span>
        ))}
      </>
    ),
  },
];

export const ShippingRequestsTable = () => {
  return (
    <div className="tableContainer">
      <Table columns={columns} dataSource={ORDERS} />;
    </div>
  );
};
