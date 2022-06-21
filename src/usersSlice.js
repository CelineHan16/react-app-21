import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUsers = createAsyncThunk('users/load', async (arg, thunkAPI) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

export const addUser = createAsyncThunk(
  "users/add", // action name
  async (name, thunkAPI) => {
    // action function
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        name: name
      }
    );

    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {

  },
  extraReducers: {
      [loadUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [addUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    }
  }
});

export default usersSlice.reducer;