import { createSlice } from "@reduxjs/toolkit";
import {
  createInventory,
  getAllInventory,
  getInventoryById,
  updateInventory,
} from "./inventoryThunk";

const initialState = {
  loading: false,
  error: null,

  inventories: [],
  inventory: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.inventories.push(action.payload);
      })
      .addCase(createInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateInventory.fulfilled, (state, action) => {
        state.loading = false;
        const idx = state.inventories.findIndex(
          (e) => e.id === action.payload.id,
        );
        if (idx != -1) state.inventories[idx] = action.payload;
      })
      .addCase(updateInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getAllInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.inventory = action.payload.id;
      })
      .addCase(getAllInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getInventoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInventoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.inventories = action.payload.id;
      })
      .addCase(getInventoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default inventorySlice.reducer;
