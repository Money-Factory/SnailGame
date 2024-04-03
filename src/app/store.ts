import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import stepsCounterReducer from "../features/stepsCounter/stepsCounterSlice";

export const store = configureStore({
  reducer: {
    stepsCounter: stepsCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
