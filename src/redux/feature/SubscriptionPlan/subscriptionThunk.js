import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createSubscriptionPlan = createAsyncThunk("subscriptionPlan/create",
    async (plan ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post(`/api/super-admin/subscription-plans`,plan,{
            headers,
            })
            console.log("Create Subscription Plan Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create  Subscription Plan")
        }
    }
)


export const updateSubscriptionPlan = createAsyncThunk("subscriptionPlan/update",
    async ({plan,id} ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.put(`/api/super-admin/subscription-plans/${id}`,plan,{
            headers,
            })
            console.log("Create  Subscription Plan Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create Subscription Plan")
        }
    }
)

export const getAllSubscriptionPlans = createAsyncThunk("subscriptionPlan/getAll",
    async (_ ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/super-admin/subscription-plans`,{
            headers,
            })
            console.log("Get All  Subscription Plan Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To get All Subscription Plan")
        }
    }
)

export const getAllSubscriptionPlanById = createAsyncThunk("subscriptionPlan/getById",
    async (id ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/super-admin/subscription-plans/${id}`,{
            headers,
            })
            console.log("Get  Subscription Plan  By Id Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Subscription Plan By Id")
        }
    }
)

export const deleteSubscriptionPlan = createAsyncThunk("subscriptionPlan/delete",
    async (id ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.delete(`/api/super-admin/subscription-plans/${id}`,{
            headers,
            })
            console.log("Delete  Subscription Plan  By Id Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Delete Subscription Plan By Id")
        }
    }
)
