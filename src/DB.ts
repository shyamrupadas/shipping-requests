import { LatLngExpression } from "leaflet";

export interface PointsType {
  id: string;
  position: LatLngExpression;
  popup: string;
}

export const POINTS: PointsType[] = [
  { id: "1", position: [55.705, 37.530865], popup: "popup text" },
  { id: "2", position: [55.725, 37.540865], popup: "popup text" },
  { id: "3", position: [55.745, 37.590865], popup: "popup text" },
  { id: "4", position: [55.755, 37.570865], popup: "popup text" },
  { id: "5", position: [55.765, 37.590865], popup: "popup text" },
  { id: "6", position: [55.795, 37.570865], popup: "popup text" },
  { id: "7", position: [55.605, 37.540865], popup: "popup text" },
  { id: "8", position: [55.745, 37.550865], popup: "popup text" },
  { id: "9", position: [55.755, 37.570865], popup: "popup text" },
  { id: "10", position: [55.765, 37.590865], popup: "popup text" },
];
