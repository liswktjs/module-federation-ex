import { createSlice } from "@reduxjs/toolkit";
import { JobType } from "../../types";
import { namespace } from "../utils";

const initialState: {
  data: JobType[] | null;
  loading: boolean;
  fail: null | Error;
} = {
  data: null,
  loading: false,
  fail: null,
};

const {
  reducer,
  actions: { start, done, fail },
} = createSlice({
  initialState,
  name: namespace("jobs"),
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    done: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fail: (state, action) => {
      state.fail = action.payload;
      state.loading = false;
    },
  },
});

export default reducer;

export { start, done, fail };
