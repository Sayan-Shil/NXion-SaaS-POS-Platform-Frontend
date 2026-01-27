
import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createBranch = createAsyncThunk("branch/create",
    async (branchDto,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post("/api/branches",branchDto,{
            headers,
            })
            console.log("Create Branch Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create Branch")
        }
    }
)

export const getBranchById = createAsyncThunk("branch/getById",
    async (branchId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`api/branches/${branchId}`,{
            headers,
            })
            console.log("Get Branch By Id Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Branch By Id")
        }
    }
)


export const getAllBranchesByStore = createAsyncThunk("branch/getAllByStore",
    async (storeId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`api/branches/store/${storeId}`,{
            headers,
            })
            console.log("Get All Branch By Store  Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get  All Branches")
        }
    }
)

export const updateBranch = createAsyncThunk("branch/update",
    async ({id,branchDto},{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.put(`/api/branches/${id}`,branchDto,{
            headers,
            })
            console.log("Update Branch Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To update Branch")
        }
    }
)