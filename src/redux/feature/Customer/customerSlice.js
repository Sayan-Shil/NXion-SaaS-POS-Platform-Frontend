import { createSlice } from "@reduxjs/toolkit";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  updateCustomer,
} from "./customerThunk";

const initialState = {
  loading: false,
  error: null,
  selectedCustomer: null,
  customers: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.pending, (state) => {
        state.loading = true;
        // state.customers=[];
        // state.error=null;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customers.push(action.payload);
      })
      .addCase(createCustomer.rejected, state, (action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Customer
      .addCase(updateCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.customers.findIndex(
          (customer) => customer.id === action.payload.id,
        );
        if (index != -1) {
          state.customers[index] = action.payload;
        }
        if (
          state.selectedCustomer &&
          state.selectedCustomer.id === action.payload.id
        ) {
          state.selectedCustomer = action.payload;
        }
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        state.error = action.payload;
      })

      //Delete Customer
      .addCase(deleteCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = state.customers.filter(
          (customer) => customer.id != action.payload.id,
        );
        if (
          state.selectedCustomer &&
          state.selectedCustomer.id === action.payload.id
        ) {
          state.selectedCustomer = null;
        }
      })

      .addCase(deleteCustomer.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Get All Customers

      .addCase(getAllCustomers.pending, (state) => {
        state.loading = false;
        state.loading = true;
      })

      .addCase(getAllCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      })

      .addCase(getAllCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default customerSlice.reducer;
