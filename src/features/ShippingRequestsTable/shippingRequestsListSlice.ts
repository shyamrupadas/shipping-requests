import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LatLngExpression } from "leaflet";
import { fetchCurrentRequestPoints } from "./shipppingRequestsAPI";

interface PointsType {
  id: string;
  position: LatLngExpression;
  popup: string;
}

export interface shippingRequestState {
  requests: shippingRequest[];
  currentRequestId: string;
  currentRequestPoints: PointsType[];
}

export interface shippingRequest {
  id?: string;
  title: string;
  pointIds: string[];
}

const initialState: shippingRequestState = {
  requests: [
    {
      id: "1",
      title: "Order 1",
      pointIds: ["1", "7", "3"],
    },
    {
      id: "2",
      title: "Order 2",
      pointIds: ["2", "9", "5", "7"],
    },
    {
      id: "3",
      title: "Order 3",
      pointIds: ["3", "8", "1"],
    },
    {
      id: "4",
      title: "Order 4",
      pointIds: ["6", "2"],
    },
    {
      id: "5",
      title: "Order 4",
      pointIds: ["5", "2"],
    },
    {
      id: "6",
      title: "Order 4",
      pointIds: ["1", "7", "9"],
    },
    {
      id: "7",
      title: "Order 4",
      pointIds: ["5", "9"],
    },
  ],
  currentRequestId: "1",
  currentRequestPoints: [],
};

export const getCurrentRequestPoints = createAsyncThunk(
  "counter/fetchCount",
  async (ids: string[]) => {
    return await fetchCurrentRequestPoints(ids);
  }
);

export const shippingRequestsListSlice = createSlice({
  name: "shippingRequests",
  initialState,
  reducers: {
    setCurrentRequestId: (state, action) => {
      state.currentRequestId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentRequestPoints.fulfilled, (state, action) => {
      // @ts-ignore
      state.currentRequestPoints = action.payload;
    });
  },
});

export const selectRequests = (state: RootState) =>
  state.shippingRequests.requests;

export const selectCurrentRequestId = (state: RootState) =>
  state.shippingRequests.currentRequestId;

export const selectCurrentRequestPoints = (state: RootState) =>
  state.shippingRequests.currentRequestPoints;

export const selectCurrentRequest = (state: RootState) =>
  state.shippingRequests.requests.find(
    (request: shippingRequest) =>
      request.id === state.shippingRequests.currentRequestId
  );

export const { setCurrentRequestId } = shippingRequestsListSlice.actions;
export default shippingRequestsListSlice.reducer;
