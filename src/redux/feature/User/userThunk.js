import api from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserProfile = createAsyncThunk("user/getProfile",
    async (token,{rejectWithValue})=>{
        try{
            const response = await api.get("/api/users/profile",{
                headers: {Authorization: `Bearer ${token}`}
            })
            console.log("Get User Data Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Fetch Profile")
        }
    }
)

export const logout = createAsyncThunk("user/logout",
    async (_,{rejectWithValue})=>{
        try{
            localStorage.removeItem("jwt")

        }catch(error){
            console.log("Error: ",error);
            return rejectWithValue(error?.response?.data?.message || "Failed To Logout")
        }
    }
)

export const getAllCustomers = createAsyncThunk("users/getCustomers",
    async (token,{rejectWithValue})=>{
        try{
            const response = await api.get("/api/users/customers",{
                headers: {Authorization: `Bearer ${token}`}
            })
            console.log("Get Customers Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Fetch Customers")
        }
    }
)


export const getAllCashiers = createAsyncThunk("users/getCashiers",
    async (token,{rejectWithValue})=>{
        try{
            const response = await api.get("/api/users/cashiers",{
                headers: {Authorization: `Bearer ${token}`}
            })
            console.log("Get Cashiers Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Fetch Cashiers")
        }
    }
)


export const getUserById = createAsyncThunk("users/getById",
    async (userId,{rejectWithValue})=>{
        try{
            const response = await api.get(`/api/users/${userId}`,{
                headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}
            })
            console.log("Get User By Id Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Fetch User By Id")
        }
    }
)