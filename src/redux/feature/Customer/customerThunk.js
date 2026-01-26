import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createCustomer = createAsyncThunk("customer/create",
    async (customer,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post("/api/customers",customer,{
            headers,
            })
            console.log("Create Customer Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create Customer")
        }
    }
)

export const updateCustomer = createAsyncThunk("customer/update",
    async ({id,customer},{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.put(`/api/customers/${id}`,customer,{
            headers,
            })
            console.log("Update Customer Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Update Customer")
        }
    }
)

export const deleteCustomer = createAsyncThunk("customer/delete",
    async (id,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.delete(`/api/customers/${id}`,{
            headers,
            })
            console.log("Delete Customer Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Delete Customer")
        }
    }
)

export const getCustomerId = createAsyncThunk("customer/getCustomerById",
    async (id,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/customers/${id}`,{
            headers,
            })
            console.log("Get Customer By ID Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Customer By Id")
        }
    }
)

export const getAllCustomers = createAsyncThunk("customer/getAllCustomers",
    async (_,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/customers}`,{
            headers,
            })
            console.log("Get All Customer Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To All Customer ")
        }
    }
)





