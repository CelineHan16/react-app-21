import { configureStore } from '@reduxjs/toolkit'
import albumsSlice from './albumsSlice';
import photosSlice from './photosSlice';
import postsSlice from './postsSlice';
import todosSlice from './todosSlice';
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postsSlice,
    albums: albumsSlice,
    photos: photosSlice,
    todos: todosSlice
  },
});

export default store;