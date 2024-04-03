import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchStepsCount } from "./stepsCounterAPI";
import { RootState } from "../../app/store";

interface StepsCounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: StepsCounterState = {
  value: 0,
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = createAsyncThunk<
  number,
  number,
  { state: { counter: StepsCounterState } }
>("stepsCounter/fetchStepsCount", async (amount: number, { getState }) => {
  const { value } = getState().counter;
  const response = await fetchStepsCount(value, amount);
  return response.data;
});

export const stepsCounterSlice = createSlice({
  name: "stepsCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } =
  stepsCounterSlice.actions;

export const selectCount = (state: RootState) => state.stepsCounter.value;

export default stepsCounterSlice.reducer;
