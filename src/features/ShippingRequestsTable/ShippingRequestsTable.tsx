import React, { useCallback } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import "./ShippingRequestsTable.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectRequests,
  setCurrentRequestId,
} from "./shippingRequestsListSlice";
import { selectPoints } from "../RequestPoints/requestPointsSlice";
import { PointSelect } from "../../component/PointSelect/PointSelect";

interface DataType {
  id?: string;
  title: string;
  pointIds: string[];
}

export const ShippingRequestsTable = () => {
  const orders = useAppSelector(selectRequests);
  const points = useAppSelector(selectPoints);

  const dispatch = useAppDispatch();

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
          {pointIds.map((id, index) => (
            <PointSelect
              key={index}
              points={points}
              currentPoint={id}
              index={index}
            />
          ))}
        </>
      ),
    },
  ];

  const handleRowClick = useCallback((id?: string) => {
    dispatch(setCurrentRequestId(id));
  }, []);

  return (
    <div className="tableContainer">
      <Table
        columns={columns}
        dataSource={orders}
        onRow={(record) => {
          return {
            onClick: () => {
              handleRowClick(record.id);
            },
          };
        }}
      />
    </div>
  );
};
