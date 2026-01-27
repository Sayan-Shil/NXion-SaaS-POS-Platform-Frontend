import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createStore = createAsyncThunk(
  "store/create",
  async (storeData, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.post(`/api/stores`, storeData, {
        headers,
      });
      console.log("Create Store Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Create Store",
      );
    }
  },
);

export const getStoreById = createAsyncThunk(
  "store/getById",
  async (id, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/stores/${id}`, {
        headers,
      });
      console.log("Get Store By ID Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Store By Id",
      );
    }
  },
);

export const getAllStores = createAsyncThunk(
  "store/getAll",
  async (status, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/stores`, {
        headers,
        params: status ? {status} : undefined
      });
      console.log("Get All Store =Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To All Store ",
      );
    }
  },
);

export const updateStore = createAsyncThunk(
  "store/update",
  async ({storeData,storeId}, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.put(`/api/stores/${storeId}`, storeData, {
        headers,
      });
      console.log("Update Store Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To update Store",
      );
    }
  },
);

export const getStoreByAdmin = createAsyncThunk(
  "store/getByAdmin",
  async (_, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/stores/admin`, {
        headers,
      });
      console.log("Get Store By Admin Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Store By Admin",
      );
    }
  },
);
export const getStoreByEmployee = createAsyncThunk(
  "store/getByEmployee",
  async (_, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/stores/employee`, {
        headers,
      });
      console.log("Get Store By Employee Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Store By Employee",
      );
    }
  },
);

export const moderateStore = createAsyncThunk(
  "store/moderate",
  async ({id,action}, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.put(`/api/stores/${id}/moderate`,null, {
        headers,
        params: {action}
      });
      console.log("Moderate Store Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To moderate Store",
      );
    }
  },
);



