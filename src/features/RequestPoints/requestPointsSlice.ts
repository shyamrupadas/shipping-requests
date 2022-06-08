import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LatLngExpression } from "leaflet";

export interface requestPoint {
  id: string;
  position: LatLngExpression;
  popup: string;
}

const initialState: requestPoint[] = [];

export const requestPointsSlice = createSlice({
  name: "RequestPoints",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = requestPointsSlice.actions;

export const selectPoints = (state: RootState) => state.requestPoints;

export const selectPointById = (state: RootState, id: string) =>
  state.requestPoints.find((request: requestPoint) => request.id === id);

export const selectPointsByIds = (state: RootState, ids: string[]) =>
  ids.map((id: string) =>
    state.requestPoints.find((request: requestPoint) => request.id === id)
  );

export default requestPointsSlice.reducer;
