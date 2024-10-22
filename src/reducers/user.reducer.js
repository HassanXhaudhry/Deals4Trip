import { createSlice } from "@reduxjs/toolkit";

const APP_USER = "PER__USER";
const APP_USER_TOKEN = "PER__USER_TOKEN";

const initialState = {
  data: localStorage.getItem(APP_USER)
    ? JSON.parse(localStorage.getItem(APP_USER))
    : null,
  token: localStorage.getItem(APP_USER_TOKEN)
    ? localStorage.getItem(APP_USER_TOKEN) 
    : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload ? JSON.stringify(action.payload) : null;
      if (user) {
        localStorage.setItem(APP_USER, user);
      } else {
        localStorage.removeItem(APP_USER); 
      }
      state.data = action.payload;
    },
    setToken: (state, action) => {
      const token = action.payload || null;
      if (token) {
        localStorage.setItem(APP_USER_TOKEN, token);
      } else {
        localStorage.removeItem(APP_USER_TOKEN); 
      }
      state.token = action.payload;
    },
    clearUser: (state) => {
      localStorage.removeItem(APP_USER);
      localStorage.removeItem(APP_USER_TOKEN);
      state.data = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, clearUser } = userSlice.actions;

export default userSlice.reducer;
