import { createSlice } from "@reduxjs/toolkit";
import { createCategory, deleteCategory, getCategoriesByStore, updateCategory } from "./categoryThunk";

const initialState = {
  loading: false,
  error: null,
  categories: [],
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(createCategory.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
         .addCase(createCategory.pending,(state,action)=>{
            state.loading = false;
            state.error = null;
            state.categories.push(action.payload)

        })
         .addCase(createCategory.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // Update
        .addCase(updateCategory.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
         .addCase(updateCategory.pending,(state,action)=>{
            state.loading = false;
            state.error = null;
            const index = state.categories.findIndex((category)=>category.id === action.payload.id);
           
            if(index!==-1){
                 state.categories[index] =action.payload
            }

        })
         .addCase(updateCategory.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        // Get Categories
        .addCase(getCategoriesByStore.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
         .addCase(getCategoriesByStore.pending,(state,action)=>{
            state.loading = false;
            state.error = null;
            state.categories = action.payload

        })
         .addCase(getCategoriesByStore.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        // Delete
         .addCase(deleteCategory.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
         .addCase(deleteCategory.pending,(state,action)=>{
            state.loading = false;
            state.error = null;
            state.categories = state.categories.filter((category)=>category.id != action.payload.id)

        })
         .addCase(deleteCategory.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default categorySlice.reducer
