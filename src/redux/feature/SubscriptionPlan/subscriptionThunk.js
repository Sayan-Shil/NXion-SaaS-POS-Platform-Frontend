import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createCategory = createAsyncThunk("stores/create",
    async (storeData ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post(`/api/stores`,storeData,{
            headers,
            })
            console.log("Create Store Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create Store")
        }
    }
)
