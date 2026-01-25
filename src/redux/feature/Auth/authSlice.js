import { createSlice } from "@reduxjs/toolkit"
import { loginMethod, signupMethod } from "./AuthThunk"

const authSlice = createSlice({
    name: "auth",
    initialState : {
        user:null,
        loading:false,
        error:null
    },
    reducers:{
        logout : (state)=>{
            state.user = null,
            localStorage.removeItem("jwt")
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(signupMethod.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(signupMethod.fulfilled, (state,action)=>{
            state.loading = false;
            state.user = action.payload
        })
        .addCase(signupMethod.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        }).addCase(loginMethod.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(loginMethod.fulfilled, (state,action)=>{
            state.loading = false;
            state.user = action.payload
        })
        .addCase(loginMethod.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})


export const {logout} = authSlice.actions;
export default authSlice.reducer;