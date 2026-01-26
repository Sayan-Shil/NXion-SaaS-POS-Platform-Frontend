import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAuthToken = ()=>{
    const jwt = localStorage.getItem("jwt")
    if(!jwt){
        throw new error("No Jwt!")
    }
    return jwt;
}

export const getAuthHeaders =()=>{
    const jwt = getAuthToken();
    return {
        "Authorization" : `Bearer ${jwt}` ,
        "Content-Type" : "application/json"
    }
}