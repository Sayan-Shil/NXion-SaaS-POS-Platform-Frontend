import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    dailySales:[],
    topProducts:[],
    topCashiers:[],
    categorySales:[],
    todayOverview:null,
    paymentBreakdown:[],
    loading:false,
    error:null
}

const branchAnalyticsSlice = createSlice({
    name: "branchAnalytics",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase()
    }
})
