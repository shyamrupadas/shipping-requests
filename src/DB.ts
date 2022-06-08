import { LatLngExpression } from "leaflet";

export interface PointsType {
  id: string;
  position: LatLngExpression;
  tittle: string;
}

export const POINTS: PointsType[] = [
  { id: "1", position: [55.705, 37.530865], tittle: "point 1" },
  { id: "2", position: [55.725, 37.540865], tittle: "point 2" },
  { id: "3", position: [55.745, 37.590865], tittle: "point 3" },
  { id: "4", position: [55.755, 37.570865], tittle: "point 4" },
  { id: "5", position: [55.765, 37.590865], tittle: "point 5" },
  { id: "6", position: [55.795, 37.570865], tittle: "point 6" },
  { id: "7", position: [55.605, 37.540865], tittle: "point 7" },
  { id: "8", position: [55.745, 37.550865], tittle: "point 8" },
  { id: "9", position: [55.755, 37.520865], tittle: "point 9" },
  { id: "10", position: [55.765, 37.590865], tittle: "point 10" },
];
