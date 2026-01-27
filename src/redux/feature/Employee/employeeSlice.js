import { createSlice } from "@reduxjs/toolkit";
import { createBranchEmployee, createStoreEmployee, deleteEmployee, findBranchEmployee, findEmployeeById, findStoreEmployee, updateEmployee } from "./employeeThunk";
const initialState = {
    employees: [],
    employee : null,

    loading: false,
    error: null
}


const employeeSlice = createSlice({
    name : "employee",
    initialState,
    reducers: [],
    extraReducers: (builder)=>{
        builder
        .addCase(createBranchEmployee.pending, (state)=>{
             state.loading = true;
        } )
        .addCase(createBranchEmployee.pending, (state,action)=>{
             state.loading = false;
             state.employees.push(action.payload)
        } )
        .addCase(createBranchEmployee.pending, (state,action)=>{
             state.loading = false;
             state.error = action.payload;
        } )

        .addCase(createStoreEmployee.pending, (state)=>{
             state.loading = true;
        } )
        .addCase(createStoreEmployee.pending, (state,action)=>{
             state.loading = false;
             state.employees.push(action.payload)
        } )
        .addCase(createStoreEmployee.pending, (state,action)=>{
             state.loading = false;
             state.error = action.payload;
        } )

        .addCase(updateEmployee.pending, (state)=>{
             state.loading = true;
        } )
        .addCase(updateEmployee.pending, (state,action)=>{
             state.loading = false;
             const idx = state.employees.findIndex((e)=>e.id === action.payload.id);
             if(idx!=-1) state.employees[idx] = action.payload;
        } )
        .addCase(updateEmployee.pending, (state,action)=>{
             state.loading = false;
             state.error = action.payload;
        } )

        .addCase(findEmployeeById.pending, (state)=>{
             state.loading = true;
        } )
        .addCase(findEmployeeById.pending, (state,action)=>{
             state.loading = false;
             state.employee = action.payload;
        } )
        .addCase(findEmployeeById.pending, (state,action)=>{
             state.loading = false;
             state.error = action.payload;
        } )
        .addCase(deleteEmployee.pending, (state)=>{
             state.loading = true;
        } )
        .addCase(deleteEmployee.pending, (state,action)=>{
             state.loading = false;
             state.employees = state.employees.filter((e)=>e.id!=action.payload.id)
        } )
        .addCase(deleteEmployee.pending, (state,action)=>{
             state.loading = false;
             state.error = action.payload;
        } )
         .addCase(findStoreEmployee.pending, (state)=>{
             state.loading = true;
        } )
        .addCase(findStoreEmployee.pending, (state,action)=>{
             state.loading = false;
             state.employees = action.payload
        } )
        .addCase(findStoreEmployee.pending, (state,action)=>{
             state.loading = false;
             state.error = action.payload;
        } )
        .addCase(findBranchEmployee.pending, (state)=>{
             state.loading = true;
        } )
        .addCase(findBranchEmployee.pending, (state,action)=>{
             state.loading = false;
             state.employees = action.payload
        } )
        .addCase(findBranchEmployee.pending, (state,action)=>{
             state.loading = false;
             state.error = action.payload;
        } )

    }
})

export default employeeSlice.reducer;