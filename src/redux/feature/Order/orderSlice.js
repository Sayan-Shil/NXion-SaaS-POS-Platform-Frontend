import { createSlice } from "@reduxjs/toolkit";
import { createOrder, deleteOrder, getOrderByBranch, getOrderByCashier, getOrderByCustomer, getOrderById, getTodayOrdersByBranch } from "./orderThunk";

const initialState = {
  loading: false,
  error: null,
  orders:[],
  todayOrders:[],
  customerOrders:[],
  recentOrders:[],
  selectedOrder: null,
};


const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(createOrder.pending, (state)=>{
            state.loading = true;
        })
        .addCase(createOrder.fulfilled, (state,action)=>{
            state.loading = false;
            state.error= null;
            state.orders.push(action.payload);
        } )
        .addCase(createOrder.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase(getOrderById.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getOrderById.fulfilled, (state,action)=>{
            state.loading = false;
            state.error= null;
            state.selectedOrder = action.payload;
        } )
        .addCase(getOrderById.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase(getOrderByBranch.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getOrderByBranch.fulfilled, (state,action)=>{
            state.loading = false;
            state.error= null;
            state.orders= action.payload;
            
        } )
        .addCase(getOrderByBranch.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
         .addCase(getOrderByCashier.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getOrderByCashier.fulfilled, (state,action)=>{
            state.loading = false;
            state.error= null;
            state.orders= action.payload;
            
        } )
        .addCase(getOrderByCashier.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })

         .addCase(getTodayOrdersByBranch.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getTodayOrdersByBranch.fulfilled, (state,action)=>{
            state.loading = false;
            state.error= null;
            state.todayOrders= action.payload;
            
        } )
        .addCase(getTodayOrdersByBranch.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })

          .addCase(getOrderByCustomer.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getOrderByCustomer.fulfilled, (state,action)=>{
            state.loading = false;
            state.error= null;
            state.customerOrders= action.payload;
            
        } )
        .addCase(getOrderByCustomer.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
         .addCase(deleteOrder.fulfilled, (state,action)=>{
            state.loading = false;
            state.error= null;
            state.orders= state.orders.filter((order)=>order.id!== action.payload);
            
        } )
        .addCase(deleteOrder.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })

        
    }
});


export default orderSlice.reducer;
