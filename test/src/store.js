import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDraws, getLatestDraw } from "./utils/api";

export const fetchDraws = createAsyncThunk("draws/fetchDraws", async () => {
  const draws = await getLatestDraw();
  return draws;
});

export const fetchMoreDraws = createAsyncThunk(
  "draws/fetchMoreDraws",
  async (params) => {
    const { drawNumber, number, sort } = params;
    const draws = await getDraws(drawNumber, number, sort);
    return draws;
  }
);

const drawsSlice = createSlice({
  name: "draws",
  initialState: { data: [], loading: false, hasMore: true },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDraws.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDraws.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchMoreDraws.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoreDraws.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
        state.loading = false;
        state.hasMore = action.payload.length > 0;
      });
  },
});

export default drawsSlice.reducer;