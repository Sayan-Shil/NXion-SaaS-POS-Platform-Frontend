import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createStoreEmployee = createAsyncThunk("employee/createStoreEmployee",
    async ({storeId,employee},{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post(`/api/employees/store/${storeId}`,employee,{
            headers,
            })
            console.log("Create Store Employee Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create  Store Employee")
        }
    }
)

export const createBranchEmployee = createAsyncThunk("employee/createBranchEmployee",
    async ({branchId,employee},{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post(`/api/employees/branch/${branchId}`,employee,{
            headers,
            })
            console.log("Create Branch Employee Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create  Store Employee")
        }
    }
)

export const updateEmployee = createAsyncThunk("employee/update",
    async ({employeeId,employeeDetails},{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.put(`/api/employees/${employeeId}`,employeeDetails,{
            headers,
            })
            console.log("Update Employee Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Update Employee")
        }
    }
)

export const findEmployeeById = createAsyncThunk("employee/findById",
    async (employeeId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/employees/${employeeId}`,{
            headers,
            })
            console.log("Find Employee Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Find Employee")
        }
    }
)

export const deleteEmployee = createAsyncThunk("employee/delete",
    async (employeeId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.delete(`/api/employees/${employeeId}`,{
            headers,
            })
            console.log("Delete Employee Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Delete Employee")
        }
    }
)

export const findStoreEmployee = createAsyncThunk("employee/getByStoreId",
    async (storeId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/employees/store/${storeId}`,{
            headers,
            })
            console.log("Get All Store Employee  Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Fetch All Store Employee")
        }
    }
)

export const findBranchEmployee = createAsyncThunk("employee/getByStoreId",
    async (branchId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/employees/branch/${branchId}`,{
            headers,
            })
            console.log("Get All Store Employee  Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Fetch All Branch Employee")
        }
    }
)