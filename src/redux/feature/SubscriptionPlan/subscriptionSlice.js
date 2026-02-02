import { createSlice } from "@reduxjs/toolkit";
import {
  createSubscriptionPlan,
  deleteSubscriptionPlan,
  getAllSubscriptionPlanById,
  getAllSubscriptionPlans,
  updateSubscriptionPlan,
} from "./subscriptionThunk";

const initialState = {
  plans: [],
  selectedPlan: null,

  loading: false,
  error: null,
};

const subscriptionPlanSlice = createSlice({
  name: "subscriptionPlan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSubscriptionPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubscriptionPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plans.push(action.payload);
      })
      .addCase(createSubscriptionPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateSubscriptionPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubscriptionPlan.fulfilled, (state, action) => {
        state.loading = false;
        const idx = state.plans.findIndex((e) => e.id === action.payload.id);
        if (idx != -1) state.plans[idx] = action.payload;
      })
      .addCase(updateSubscriptionPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteSubscriptionPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSubscriptionPlan.fulfilled, (state, action) => {
        state.loading = false;
        if (selectedPlan && selectedPlan.id === action.payload.id)
          selectedPlan = null;
        state.plans = state.plans.filter(
          (plan) => plan.id !== action.payload.id,
        );
      })
      .addCase(deleteSubscriptionPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getAllSubscriptionPlanById.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(getAllSubscriptionPlanById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPlan = action.payload.id;
      })
      .addCase(getAllSubscriptionPlanById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getAllSubscriptionPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllSubscriptionPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload.id;
      })
      .addCase(getAllSubscriptionPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subscriptionPlanSlice.reducer;
