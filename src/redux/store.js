import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

// Thunk is already included by default in Redux Toolkit
const store = configureStore({
  reducer: {
    users: userReducer,
  },
  // If you want to customize middleware:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true, // enables thunks
      serializableCheck: false, // optional: disable warnings for non-serializable data
    }),
});

export default store;
