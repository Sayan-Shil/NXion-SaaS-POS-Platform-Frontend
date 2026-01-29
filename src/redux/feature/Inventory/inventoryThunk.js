import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createInventory = createAsyncThunk("inventory/create",
    async (inventoryDTO ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post(`/api/inventories`,inventoryDTO,{
            headers,
            })
            console.log("Create Inventory Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create Inventory")
        }
    }
)

export const updateInventory = createAsyncThunk("inventory/update",
    async ({inventoryDTO,id} ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.put(`/api/inventories/${id}`,inventoryDTO,{
            headers,
            })
            console.log("Update Inventory Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Update Inventory")
        }
    }
)

export const getInventoryById = createAsyncThunk("inventory/getById",
    async (id ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/inventories/${id}`,{
            headers,
            })
            console.log("Get Inventory Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Inventory")
        }
    }
)

export const getAllInventory = createAsyncThunk("inventory/getAll",
    async (_,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/inventories`,{
            headers,
            })
            console.log("Get Inventory Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Inventory")
        }
    }
)

export const getInventoryByProduct = createAsyncThunk("inventory/getByProduct",
    async (id,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.put(`/api/inventories/product/${id}`,inventoryDTO,{
            headers,
            })
            console.log("Get Inventory By Product Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Update Inventory")
        }
    }
)
