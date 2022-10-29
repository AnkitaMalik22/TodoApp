import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";



export const fetchItems = createAsyncThunk('/', () => {
  return axios
    .get('http://localhost:4000/api/v1/item')
    .then(response => response.data)
})


  
const initialState ={ loading: false,
  todos: [],
  error: ''};

export const itemSlice = createSlice({
  name: 'Item',
  initialState,
  reducers:{

  },

  extraReducers: builder => {
    builder.addCase(fetchItems.pending, (state,action )=> {
      state.loading = true
      state.todos = action.payload
      
    })
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false
      state.todos = action.payload
      state.error = ''
    })
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false
      state.todos = action.payload
      state.error = action.error.message
    })

    
  }
})



export default itemSlice.reducer;

