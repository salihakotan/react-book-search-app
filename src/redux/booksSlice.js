import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBooksAsync = createAsyncThunk("books/getBooksAsync", async(search)=>{
    const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    console.log("searched for",search)
    return res.data.items
})

export const booksSelector = (state) =>state.books.items  
export const statusSelector = (state) =>state.books.status  

export const booksSlice = createSlice({
    name:"books",
    initialState:{
        items:[],
        status:"idle",
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getBooksAsync.pending,(state,action)=>{
            state.status = "loading"
            console.log("loading")
        })
        .addCase(getBooksAsync.rejected, (state,action)=> {
            state.status = "failed"
            console.log("failed")

            state.error = action.error.message
        })
        .addCase(getBooksAsync.fulfilled, (state,action)=> {
            state.status ="succeeded"
            console.log("success")

            state.items = action.payload
        })
    }
})

export default booksSlice.reducer