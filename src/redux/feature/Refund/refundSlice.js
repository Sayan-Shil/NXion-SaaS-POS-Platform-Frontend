import { createSlice } from "@reduxjs/toolkit";
import { createRefund, getAllRefunds, getRefundByBranch, getRefundByCashier, getRefundByCashierAndDateRange, getRefundById, getRefundByShift } from "./refundThunk";

const initialState = {
  loading: false,
  error: null,

  refunds: [],
  refundsByCashier: [],
  refundsByBranch: [],
  refundsByShift: [],
  refundsByDateRange: [],
  selectedRefund: null,
};

const refundSlice = createSlice({
  name: "refund",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRefund.pending, (state) => {
        state.loading = true;
      })
      .addCase(createRefund.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.refunds.push(action.payload);
      })
      .addCase(createRefund.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getRefundById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRefundById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.selectedRefund = action.payload
      })
      .addCase(getRefundById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
       .addCase(getRefundByBranch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRefundByBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.refundsByBranch = action.payload
      })
      .addCase(getRefundByBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
       .addCase(getRefundByCashier.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRefundByCashier.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.refundsByCashier = action.payload
      })
      .addCase(getRefundByCashier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
       .addCase(getAllRefunds.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllRefunds.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.refunds = action.payload
      })
      .addCase(getAllRefunds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
       .addCase(getRefundByCashierAndDateRange.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRefundByCashierAndDateRange.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.refundsByDateRange = action.payload
      })
      .addCase(getRefundByCashierAndDateRange.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getRefundByShift.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRefundByShift.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.refundsByShift = action.payload
      })
      .addCase(getRefundByShift.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});


export default refundSlice.reducer;

