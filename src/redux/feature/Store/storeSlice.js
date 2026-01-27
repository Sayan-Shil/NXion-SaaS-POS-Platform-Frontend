import { createSlice } from "@reduxjs/toolkit";
import {
  createStore,
  getStoreById,
  getAllStores,
  updateStore,
  getStoreByAdmin,
  getStoreByEmployee,
  moderateStore,
} from "./storeThunk";

const initialState = {
  loading: false,
  error: null,

  store: null,
  stores: [],
  employees: [],
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // CREATE STORE
      .addCase(createStore.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStore.fulfilled, (state, action) => {
        state.loading = false;
        state.store = action.payload;
      })
      .addCase(createStore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET STORE BY ID
      .addCase(getStoreById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreById.fulfilled, (state, action) => {
        state.loading = false;
        state.store = action.payload;
      })
      .addCase(getStoreById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET ALL STORES
      .addCase(getAllStores.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllStores.fulfilled, (state, action) => {
        state.loading = false;
        state.stores = action.payload;
      })
      .addCase(getAllStores.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE STORE
      .addCase(updateStore.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStore.fulfilled, (state, action) => {
        state.loading = false;
        state.store = action.payload;
      })
      .addCase(updateStore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET STORE BY ADMIN
      .addCase(getStoreByAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreByAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.store = action.payload;
      })
      .addCase(getStoreByAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET STORE BY EMPLOYEE
      .addCase(getStoreByEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreByEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.store = action.payload;
      })
      .addCase(getStoreByEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // MODERATE STORE
      .addCase(moderateStore.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(moderateStore.fulfilled, (state, action) => {
        state.loading = false;
        const updated  = action.payload;

        state.stores = state.stores.map((e)=>e.id === updated.id ? updated : e)
      })
      .addCase(moderateStore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default storeSlice.reducer;
