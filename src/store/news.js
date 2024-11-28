import { createSlice } from "@reduxjs/toolkit";

const news = createSlice({
  name: "news",
  initialState: {
    news: [
      {
        title: "news_title_example_1",
        article_id: "",
        url: "",
        source: "",
        summary: "",
        keywords: [],
        date: "",
        image_url: "",
      },
    ],
  },
  reducers: {
    setNews(state, action) {
      state.news.push(action.payload);
    },
  },
});

export const { setNews } = news.actions;
export default news.reducer;
