import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LatLngExpression } from "leaflet";
import { fetchRequestPoints } from "../ShippingRequestsTable/shipppingRequestsAPI";

export interface requestPoint {
  id: string;
  position: LatLngExpression;
  title: string;
}

export interface requestPoints {
  points: requestPoint[];
}

const initialState: requestPoints = {
  points: [],
};

export const getRequestPoints = createAsyncThunk(
  "requestPoints/getRequestPoints",
  async () => {
    return await fetchRequestPoints();
  }
);

export const requestPointsSlice = createSlice({
  name: "requestPoints",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRequestPoints.fulfilled, (state, action) => {
      // @ts-ignore
      state.points = action.payload;
    });
  },
});

export const selectPoints = (state: RootState) => state.requestPoints.points;

// export const selectPointById = (state: RootState, id: string) =>
//   state.requestPoints.find((request: requestPoint) => request.id === id);
//
// export const selectPointsByIds = (state: RootState, ids: string[]) =>
//   ids.map((id: string) =>
//     state.requestPoints.find((request: requestPoint) => request.id === id)
//   );

export const {} = requestPointsSlice.actions;
export default requestPointsSlice.reducer;
