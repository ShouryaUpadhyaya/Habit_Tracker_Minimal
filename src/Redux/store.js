import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habitSlice"; // Import reducer

const store = configureStore({
  reducer: {
    habits: habitReducer, // Register reducer
  },
});

export default store;
