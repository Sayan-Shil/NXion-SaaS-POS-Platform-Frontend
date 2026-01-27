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
