import { createSlice } from "@reduxjs/toolkit";
import {
  getDailySalesChart,
  getTopProductByQuantity,
  getTopCashierByRevenue,
  getCategoryWiseSalesBreakdown,
  getTodayOverview,
  getPaymentBreakdown,
} from "./branchAnalyticsThunk"; // adjust path

const initialState = {
  dailySales: [],
  topProducts: [],
  topCashiers: [],
  categorySales: [],
  todayOverview: null,
  paymentBreakdown: [],
  loading: false,
  error: null,
};

const branchAnalyticsSlice = createSlice({
  name: "branchAnalytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

     
      .addCase(getDailySalesChart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDailySalesChart.fulfilled, (state, action) => {
        state.loading = false;
        state.dailySales = action.payload;
      })
      .addCase(getDailySalesChart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getTopProductByQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopProductByQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.topProducts = action.payload;
      })
      .addCase(getTopProductByQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getTopCashierByRevenue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopCashierByRevenue.fulfilled, (state, action) => {
        state.loading = false;
        state.topCashiers = action.payload;
      })
      .addCase(getTopCashierByRevenue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(getCategoryWiseSalesBreakdown.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryWiseSalesBreakdown.fulfilled, (state, action) => {
        state.loading = false;
        state.categorySales = action.payload;
      })
      .addCase(getCategoryWiseSalesBreakdown.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      .addCase(getTodayOverview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodayOverview.fulfilled, (state, action) => {
        state.loading = false;
        state.todayOverview = action.payload;
      })
      .addCase(getTodayOverview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    
      .addCase(getPaymentBreakdown.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPaymentBreakdown.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentBreakdown = action.payload;
      })
      .addCase(getPaymentBreakdown.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default branchAnalyticsSlice.reducer;
