import { requestPoint } from "../../features/RequestPoints/requestPointsSlice";
import { useAppDispatch } from "../../app/hooks";
import { Select } from "antd";
import React, { useCallback } from "react";
import { setPointIds } from "../../features/ShippingRequestsTable/shippingRequestsListSlice";

export const PointSelect = ({
  points,
  currentPoint,
  index,
}: {
  points: requestPoint[];
  currentPoint: string;
  index: number;
}) => {
  const dispatch = useAppDispatch();

  const { Option } = Select;

  const handleSelectChange = useCallback(
    (value: string) => {
      dispatch(setPointIds({ index, value }));
    },
    [dispatch, index]
  );

  return (
    <>
      <Select
        defaultValue={currentPoint}
        style={{ width: 50 }}
        onChange={handleSelectChange}
      >
        {points.map((point) => (
          <Option key={point.id}>{point.title}</Option>
        ))}
      </Select>
    </>
  );
};
