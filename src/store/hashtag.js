// store/hashtagSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedHashtags: [],
};

const hashtag = createSlice({
  name: 'hashtag',
  initialState,
  reducers: {
    toggleHashtag: (state, action) => {
      const tag = action.payload;
      if (tag === '전체보기') {
        state.selectedHashtags = ['전체보기']; // 전체보기 선택 시 다른 해시태그 초기화
      } else {
        if (state.selectedHashtags.includes(tag)) {
          state.selectedHashtags = state.selectedHashtags.filter((t) => t !== tag);
        } else {
          state.selectedHashtags = state.selectedHashtags.filter((t) => t !== '전체보기'); // 다른 선택 시 전체보기 제거
          state.selectedHashtags.push(tag);
        }
      }
    },
    resetHashtags: () => initialState, 
  },
});

export const { toggleHashtag, resetHashtags } = hashtag.actions;
export default hashtag.reducer;
