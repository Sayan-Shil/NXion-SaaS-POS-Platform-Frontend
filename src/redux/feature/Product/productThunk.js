import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createProduct = createAsyncThunk("product/create",
    async (productDTO ,{rejectWithValue})=>{
        try{
            const headers  = getAuthHeaders();
            const response = await api.post(`/api/products`,productDTO,{
            headers,
            })
            console.log("Create Product Success ",response.data);
            return response.data;

        }catch(error){
            console.log("Error: ",error?.response?.data);
            return rejectWithValue(error?.response?.data?.message || "Failed To Create Product")
        }
    }
)

export const updateProduct = createAsyncThunk(
  "product/update",
  async ({productDTO,productId}, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.patch(`/api/products/${productId}`, productDTO, {
        headers,
      });
      console.log("Update Product Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To update Product",
      );
    }
  },
);

export const getProductById = createAsyncThunk(
  "product/getById",
  async (id, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/products/${id}`, {
        headers,
      });
      console.log("Get Product By ID Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To get Product By Id",
      );
    }
  },
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.delete(`/api/products/${id}`, {
        headers,
      });
      console.log("Delete Product By ID Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To delete Product By Id",
      );
    }
  },
);

export const getProductByStore = createAsyncThunk(
  "product/getByStoreId",
  async (storeId, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/products/store/${storeId}`, {
        headers,
      });
      console.log("Get Product By StoreID Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To get Product By StoreID",
      );
    }
  },
);

export const searchProduct = createAsyncThunk(
  "product/search",
  async ({storeId,query}, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.delete(`/api/products/store/${id}/search?q=${query}`, {
        headers,
      });
      console.log("Search Product  Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To search Product By Id",
      );
    }
  },
);

