import { createSlice } from "@reduxjs/toolkit";
import { createBranch, getAllBranchesByStore, getBranchById, updateBranch } from "./branchThunk";

const initialState = {
    loading: false,
    error:null,

    branch : null,
    branches: [] ,
    employee: [] ,


}

const branchSlice = createSlice({
    name: "branch",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(createBranch.pending,(state)=>{
            state.pending = true;
        })
        .addCase(createBranch.pending,(state,action)=>{
            state.pending = false;
            state.branches.push(action.payload)
            if(state.branch.id === action.payload.id){
                state.branch = action.payload
            }
        })
        .addCase(createBranch.pending,(state,action)=>{
            state.pending = false;
            state.error = action.payload
        })

         .addCase(updateBranch.pending,(state)=>{
            state.pending = true;
        })
        .addCase(updateBranch.pending,(state,action)=>{
            state.pending = false;
            state.branches = action.payload
            // if(state.selectedBranch && state.selectedBranch.id==action.payload.id) state.selectedBranch=null;

            // const idx = state.branches.findIndex((state)=>state.id===action.payload.id);
            // if(idx!=-1){
            //     state.branches[idx]= action.payload;
            // }
        })
        .addCase(updateBranch.pending,(state,action)=>{
            state.pending = false;
            state.error = action.payload
        })

         .addCase(getBranchById.pending,(state)=>{
            state.pending = true;
        })
        .addCase(getBranchById.pending,(state,action)=>{
            state.pending = false;
            state.branch = action.payload
        })
        .addCase(getBranchById.pending,(state,action)=>{
            state.pending = false;
            state.error = action.payload
        })

         .addCase(getAllBranchesByStore.pending,(state)=>{
            state.pending = true;
        })
        .addCase(getAllBranchesByStore.pending,(state,action)=>{
            state.pending = false;
            state.branches = action.payload
        })
        .addCase(getAllBranchesByStore.pending,(state,action)=>{
            state.pending = false;
            state.error = action.payload
        })

    }
})

export default branchSlice.reducer;