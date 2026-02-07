import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createCategory = createAsyncThunk("category/create",
    async (categoryDto ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post(`/api/categories`,categoryDto,{
            headers,
            })
            console.log("Create Category Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create Category")
        }
    }
)

export const getCategoriesByStore = createAsyncThunk("category/getByStore",
    async (storeId ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/categories/store/${storeId}`,{
            headers,
            })
            console.log("Get Categories By Store Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Categories By Store")
        }
    }
)

export const updateCategory = createAsyncThunk("category/update",
    async ({categoryDto,id} ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.put(`/api/categories/${id}`,categoryDto,{
            headers,
            })
            console.log("Update Category Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Update Category")
        }
    }
)

export const deleteCategory = createAsyncThunk("category/update",
    async (id,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.delete(`/api/categories/${id}`,{
            headers,
            })
            console.log("Delete Category Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Delete Category")
        }
    }
)
