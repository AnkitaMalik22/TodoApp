import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const addItem = createAsyncThunk('/', (data) => {
    return axios
      .post('http://localhost:4000/api/v1/item',data)
      .then(response => response.data)
  })
  
  const initialState ={text:"",loading: false,
  error: ''};

export const addItemSlice = createSlice({
    name: 'addItem',
 initialState,
    reducers:{
  
    },
  
    extraReducers: builder => {
      builder.addCase(addItem.pending, state => {
        state.loading = true
        
      })
      builder.addCase(addItem.fulfilled, (state, action) => {
        state.loading = false
       state.text= action.payload
        state.error = ''
      })
      builder.addCase(addItem.rejected, (state, action) => {
        state.loading = false
        state.text=""
        state.error = action.error.message
      })
  
      
    }
  })


  export default addItemSlice.reducer;