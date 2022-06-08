import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import shippingRequestsListReducer from "../features/ShippingRequestsTable/shippingRequestsListSlice";
import requestPointsReducer from "../features/RequestPoints/requestPointsSlice";

export const store = configureStore({
  reducer: {
    shippingRequests: shippingRequestsListReducer,
    requestPoints: requestPointsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
