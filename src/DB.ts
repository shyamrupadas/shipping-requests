import { LatLngExpression } from "leaflet";

export const ORDERS = [
  {
    id: "1",
    title: "Order 1",
    pointIds: ["1", "2", "3"],
  },
  {
    id: "2",
    title: "Order 2",
    pointIds: ["2", "4"],
  },
  {
    id: "3",
    title: "Order 3",
    pointIds: ["3", "2", "1"],
  },
  {
    id: "4",
    title: "Order 4",
    pointIds: ["5", "2"],
  },
];

interface PointsType {
  id: string;
  position: LatLngExpression;
  popup: string;
}

export const POINTS: PointsType[] = [
  { id: "1", position: [55.705, 37.530865], popup: "popup text" },
  { id: "2", position: [55.725, 37.540865], popup: "popup text" },
  { id: "3", position: [55.745, 37.550865], popup: "popup text" },
  { id: "4", position: [55.755, 37.570865], popup: "popup text" },
  { id: "5", position: [55.765, 37.590865], popup: "popup text" },
];
