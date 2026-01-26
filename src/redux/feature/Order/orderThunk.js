
import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createOrder = createAsyncThunk("order/create",
    async (dto,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post("/api/orders",dto,{
            headers,
            })
            console.log("Create Order Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create Order")
        }
    }
)

export const getOrderById = createAsyncThunk("order/getById",
    async (id,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/orders/${id}`,{
            headers,
            })
            console.log("Get Order by ID Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Order By Id")
        }
    }
)

export const getOrderByBranch = createAsyncThunk("order/getByBranch",
    async ({branchId,customerId,cashierId,paymentType,status},{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const params =[];
            if(customerId) params.push(`customerId=${customerId}`);
            if(cashierId) params.push(`cashierId=${cashierId}`);
            if(paymentType) params.push(`paymentType=${paymentType}`);
             if(status) params.push(`status=${status}`);

             const query= params.length ? params.join("&") : ""


            const response = await api.get(`/api/orders/branch/${branchId}${query}`,{
            headers,
            })
            console.log("Get Order by Branch Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Order By Branch")
        }
    }
)

export const getOrderByCashier = createAsyncThunk("order/getByCashier",
    async (cashierId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/orders/cashier/${cashierId}`,{
            headers,
            })
            console.log("Get Order by Cashier Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Order By Cashier")
        }
    }
)


export const getTodayOrdersByBranch = createAsyncThunk("order/getTodayByBranch",
    async (branchId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/orders/toda/branch/${branchId}`,{
            headers,
            })
            console.log("Get Today Order by Branch Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Today Order By Branch")
        }
    }
)


export const deleteOrder = createAsyncThunk("order/delete",
    async (id,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post(`/api/orders/${id}`,{
            headers,
            })
            console.log("Delete Order Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Delete Order")
        }
    }
)


export const getOrderByCustomer = createAsyncThunk("order/getByCustomer",
    async (customerId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/orders/customer/${customerId}`,{
            headers,
            })
            console.log("Get Order by Customer Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Order By Customer")
        }
    }
)

export const getRecentOrdersByBranch = createAsyncThunk("order/getRecenmtByBranch",
    async (branchId,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.get(`/api/orders/recent/${branchId}`,{
            headers,
            })
            console.log("Get Recent Orders by Branch Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Get Recent Order By Branch")
        }
    }
)


