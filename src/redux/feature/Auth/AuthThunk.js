import api from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signupMethod = createAsyncThunk("auth/signup", 
    async (userData, {rejectWithValue}) => {
        try{

            const response = await api.post("/auth/signup", userData)
            localStorage.setItem("jwt",response.data.data.jwt)
            console.log("Sign Up Sucess",response.data);
            return response.data;

        }catch(error){
            console.log("Sign Up Problem",error);
            return rejectWithValue(error.response?.data?.message || "Sign Up Failed")
        }
    }
)


export const loginMethod = createAsyncThunk("auth/login", 
    async (userData, {rejectWithValue}) => {
        try{

            const response = await api.post("/auth/login", userData)
            localStorage.setItem("jwt",response.data.data.jwt)
            console.log("Login Sucess",response.data);
            return response.data;

        }catch(error){
            console.log("Login Problem",error);
            return rejectWithValue(error.response?.data?.message || "Login Failed")
        }
    }
)