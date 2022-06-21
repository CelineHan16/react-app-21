import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadAlbums = createAsyncThunk('albums/load', async (arg, thunkAPI) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
  return response.data;
})

const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
  },
  reducers: {

  },
  extraReducers: {
      [loadAlbums.fulfilled]: (state, action) => {
      state.albums = action.payload;
    }
  }
});

export default albumsSlice.reducer;