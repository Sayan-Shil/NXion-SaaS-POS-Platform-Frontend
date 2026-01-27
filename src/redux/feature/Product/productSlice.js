import { createSlice } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, getProductById, getProductByStore, searchProduct, updateProduct } from "./productThunk";

const initialState = {
  loading: false,
  error: null,

  product: null,

  products: [],
  searchResults: [],
};


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(createProduct.pending,(state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(createProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products.push(action.payload)
        })
        .addCase(createProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error=action.payload;
        })
         .addCase(getProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      })

      .addCase(getProductByStore.fulfilled, (state, action) => {
        state.products = action.payload;
      })

      .addCase(searchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    }
})

export default productSlice.reducer;