import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    news: newsReducer,
    user: userReducer,
  },
});

export default store;
