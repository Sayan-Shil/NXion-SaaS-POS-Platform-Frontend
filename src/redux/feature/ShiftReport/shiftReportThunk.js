import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const startShift = createAsyncThunk("shiftReport/start",
    async (branchId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post(`/api/shift-report/start?branchId=${branchId}`,{},{
            headers,
            })
            console.log("Shift Started Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Start Shift")
        }
    }
)

export const endShift = createAsyncThunk("shiftReport/end",
    async (_,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.patch(`/api/shift-report/end`,{
            headers,
            })
            console.log("Shift Ended Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To End Shift")
        }
    }
)

export const getCurrentShiftProgress = createAsyncThunk("shiftReport/getCurrent",
    async (_,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/shift-report/current`,{
            headers,
            })
            console.log("Shift Current Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To fetch Current Shift")
        }
    }
)

export const getShiftReportByDate = createAsyncThunk("shiftReport/getByDate",
    async ({cashierId,date},{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const formattedDate= encodeURIComponent(date);
            const response = await api.get(`/api/shift-report/cashier/${cashierId}/by-date?date=${formattedDate}`,{
            headers,
            })
            console.log("Shift By Date Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To fetch Shift By Date")
        }
    }
)


export const getShiftReportByCashier = createAsyncThunk("shiftReport/getByCashier",
    async (cashierId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const formattedDate= encodeURIComponent(date);
            const response = await api.get(`/api/shift-report/cashier/${cashierId}`,{
            headers,
            })
            console.log("Shift By Cashier Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To fetch Shift By Cashier")
        }
    }
)


export const getShiftReportByBranch = createAsyncThunk("shiftReport/getByBranch",
    async (branchId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const formattedDate= encodeURIComponent(date);
            const response = await api.get(`/api/shift-report/branch/${branchId}`,{
            headers,
            })
            console.log("Shift By Branch Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To fetch Shift By Branch")
        }
    }
)

export const getShiftReportById = createAsyncThunk("shiftReport/getByBranch",
    async (shiftReportId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const formattedDate= encodeURIComponent(date);
            const response = await api.get(`/api/shift-report/shift-report/${shiftReportId}`,{
            headers,
            })
            console.log("Shift By Branch Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To fetch Shift By Branch")
        }
    }
)