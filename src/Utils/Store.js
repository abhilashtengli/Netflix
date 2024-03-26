import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/UserSlice";
import moviesReducer from "../Utils/MovieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
