import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import stepsCounterReducer from "../features/stepsCounter/stepsCounterSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, stepsCounterReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
