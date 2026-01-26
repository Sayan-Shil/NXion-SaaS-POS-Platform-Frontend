import api from "@/utils/api";
import { getAuthHeaders } from "@/utils/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createRefund = createAsyncThunk(
  "refund/create",
  async (refundDto, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.post("/api/refunds", refundDto, { headers });
      console.log("Create Refund Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Create Refund",
      );
    }
  },
);

export const getAllRefunds = createAsyncThunk(
  "refund/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get("/api/refunds", { headers });
      console.log("Get All Refunds Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Get All Refunds",
      );
    }
  },
);

export const getRefundById = createAsyncThunk(
  "refund/getByCashier",
  async (refundId, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/refunds/${refundId}`, {
        headers,
      });
      console.log("Get Refund By Id ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Get Refund By Id",
      );
    }
  },
);

export const getRefundByCashier = createAsyncThunk(
  "refund/getByCashier",
  async (cashierId, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/refunds/cashier/${cashierId}`, {
        headers,
      });
      console.log("Get Refund By Cashier Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Get Refund By Cashier",
      );
    }
  },
);

export const getRefundByBranch = createAsyncThunk(
  "refund/getByBranch",
  async (branchId, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/refunds/branch/${branchId}`, {
        headers,
      });
      console.log("Get Refund By Branch Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Get Refund By Branch",
      );
    }
  },
);

export const getRefundByShift = createAsyncThunk(
  "refund/getByShift",
  async (shiftReportId, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const response = await api.get(`/api/refunds/shift/${shiftReportId}`, {
        headers,
      });
      console.log("Get Refund By Shift Report Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message ||
          "Failed To Get Refund By Shift Report",
      );
    }
  },
);

export const getRefundByCashierAndDateRange = createAsyncThunk(
  "refund/getByCashierAndDateRange",
  async ({ cashierId, from, to }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();

      const formatedFrom = encodeURIComponent(from);
       const formatedTo = encodeURIComponent(to);


      const response = await api.get(`/api/refunds/cashier/${cashierId}/range?from=${from}&to=${to}`, {
        headers,
      });
      console.log("Get Refund By Cashier And Date Range Success ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error?.response?.data);
      return rejectWithValue(
        error?.response?.data?.message || "Failed To Get Refund By Cashier And Date Range",
      );
    }
  },
);
