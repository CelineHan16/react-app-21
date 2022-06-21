import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPhotos = createAsyncThunk('photos/load', async (arg, thunkAPI) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  return response.data;
})

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
  },
  reducers: {

  },
  extraReducers: {
      [loadPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
    }
  }
});

export default photosSlice.reducer;