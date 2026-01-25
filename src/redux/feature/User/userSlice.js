import { createSlice } from "@reduxjs/toolkit"
import { getAllCashiers, getAllCustomers, getAllUsers, getUserById, getUserProfile, logout } from "./userThunk"


const initialState = {
    userProfile : null,
    users:[],
    customers:[] ,
    cashiers:[],
    selectedUser:null,
    loading:false,
    error:null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducer:{
        clearUserState : (state)=>{
            state.userProfile=null,
            state.selectedUser =null,
            state.users=null,
            state.customers=null,
            state.cashiers=null,
            state.error = null
        }
    },
    extraReducer: (builder)=>{
        builder
        .addCase(getUserProfile.pending,(state)=>{
            state.laoding = true;
            state.error=null;
            state.userProfile=null;
        })
        .addCase(getUserProfile.fulfilled, (state,action)=>{
            state.loading=false;
            state.userProfile= action.payload;

        })
     
        .addCase(getUserProfile.rejected,(state,action)=>{
               state.loading=false;
               state.error=action.payload;
        })
        .addCase(getAllCustomers.fulfilled, (state,action)=>{
            state.loading=false;
            state.customers= action.payload;

        })
        .addCase(getAllCashiers.fulfilled, (state,action)=>{
            state.loading=false;
            state.cashiers= action.payload;

        })
        .addCase(getUserById.fulfilled, (state,action)=>{
            state.loading=false;
            state.selectedUser= action.payload;

        })
        .addCase(logout.fulfilled, (state)=>{
             state.userProfile=null,
            state.selectedUser =null,
            state.error=null
        })
    }
})


export default userSlice.reducer;