import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState = { value: 0 } as CounterState;

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      state.value++;
    },
    decrease(state) {
      state.value--;
    }
  }
});

export const { increase, decrease } = CounterSlice.actions;
export default CounterSlice.reducer;
