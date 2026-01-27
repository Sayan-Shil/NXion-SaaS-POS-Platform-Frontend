import { createSlice } from "@reduxjs/toolkit";
import { endShift, getCurrentShiftProgress, getShiftReportByBranch, getShiftReportByCashier, getShiftReportById, startShift } from "./shiftReportThunk";
const initialState = {
  loading: false,
  error: null,
  selectedShift: null,
  shifts: [],
  shiftsByCashier: [],
  shiftsByBranch: [],
};

const shiftReportSlice = createSlice({
  name: "shiftReport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startShift.pending, (state) => {
        state.loading = true;
      })
      .addCase(startShift.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShift = action.payload;
      })
      .addCase(startShift.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(endShift.pending, (state) => {
        state.loading = true;
      })
      .addCase(endShift.fulfilled, (state, action) => {
        state.loading = false;
        if (state.selectedShift && state.selectedShift.id === action.payload.id)
          state.selectedShift = null;
        const index = state.shifts.findIndex((shift)=>shift.id===action.payload.id)
        if(index!=-1){
            state.shifts[index] = action.payload;
        }
      })
      .addCase(endShift.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get Shift reoport  by id

      .addCase(getShiftReportById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShiftReportById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShift=action.payload
      })
      .addCase(getShiftReportById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getCurrentShiftProgress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentShiftProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShift=action.payload
      })
      .addCase(getCurrentShiftProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

       .addCase(getShiftReportByCashier.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShiftReportByCashier.fulfilled, (state, action) => {
        state.loading = false;
        state.shiftsByCashier=action.payload
      })
      .addCase(getShiftReportByCashier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getShiftReportByBranch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShiftReportByBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.shiftsByBranch=action.payload
      })
      .addCase(getShiftReportByBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      
  },
});

export default shiftReportSlice.reducer;
