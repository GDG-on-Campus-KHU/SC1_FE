import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news";
import userReducer from "./user";
import hashtagReducer from "./hashtag";

const store = configureStore({
  reducer: {
    news: newsReducer,
    user: userReducer,
    hashtag: hashtagReducer,
  },
});

export default store;
