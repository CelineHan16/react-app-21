import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadTodos = createAsyncThunk('todos/load', async (arg, thunkAPI) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
})

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {

  },
  extraReducers: {
      [loadTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
    }
  }
});

export default todosSlice.reducer;