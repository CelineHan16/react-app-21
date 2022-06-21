import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './postsSlice';
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postsSlice,
  },
});

export default store;