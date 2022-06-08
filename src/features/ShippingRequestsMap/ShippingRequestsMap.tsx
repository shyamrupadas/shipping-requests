import React, { useCallback, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCurrentRequestPoints,
  selectCurrentRequest,
  selectCurrentRequestPoints,
  setPointIds,
} from "../ShippingRequestsTable/shippingRequestsListSlice";
import {
  getRequestPoints,
  requestPoint,
  selectPoints,
} from "../RequestPoints/requestPointsSlice";

export const ShippingRequestsMap = () => {
  const currentRequest = useAppSelector(selectCurrentRequest);
  const currentRequestPoints = useAppSelector(selectCurrentRequestPoints);
  const points = useAppSelector(selectPoints);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRequestPoints());
  }, []);

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
      {currentRequestPoints.map((point, index) => (
        <Marker key={point.id} position={point.position}>
          <Popup>
            <MakerSelect
              points={points}
              currentPoint={point.id}
              index={index}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export const MakerSelect = ({
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
    (index: number, value: string) => {
      dispatch(setPointIds({ index, value }));
    },
    [dispatch]
  );

  return (
    <>
      <Select
        defaultValue={currentPoint}
        style={{ width: 120 }}
        onChange={() => handleSelectChange(index, "5")} //Todo: fix value to dynamic argument
      >
        {points.map((point) => (
          <Option key={point.id}>{point.title}</Option>
        ))}
      </Select>
      {/*<Select defaultValue="lucy" style={{ width: 120 }} disabled>*/}
      {/*  <Option value="lucy">Lucy</Option>*/}
      {/*</Select>*/}
      {/*<Select defaultValue="lucy" style={{ width: 120 }} loading>*/}
      {/*  <Option value="lucy">Lucy</Option>*/}
      {/*</Select>*/}
      {/*<Select defaultValue="lucy" style={{ width: 120 }} allowClear>*/}
      {/*  <Option value="lucy">Lucy</Option>*/}
      {/*</Select>*/}
    </>
  );
};
