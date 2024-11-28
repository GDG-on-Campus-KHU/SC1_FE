import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    user: {
      user_info: {
        id: "",
        email: "",
        name: "",
      },
      access_token: "",
      expires_in: 0,
      token_type: "",
    },
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
