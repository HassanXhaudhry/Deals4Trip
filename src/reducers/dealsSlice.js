import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tourAPI from '../api/tourAPI';


export const fetchDeals = createAsyncThunk('deals/fetchDeals', async () => {
  const data = await tourAPI.fetchTours();
  return data;
});

const dealsSlice = createSlice({
  name: 'deals',
  initialState: {
    deals: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.deals = action.payload;
        state.loading = false;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const selectDeals = (state) => state.deals.deals;
export const selectLoading = (state) => state.deals.loading;
export const selectError = (state) => state.deals.error;

export default dealsSlice.reducer;
