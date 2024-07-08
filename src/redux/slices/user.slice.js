import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  currUser: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    handleSetUsers: (state, action) => {
      state.users = action.payload;
      console.log(state.users);
    },
    handleSetCurrUser: (state, action) => {
      state.currUser = action.payload;
      console.log(state.currUser);
    },
  },
});

export const { handleSetUsers, handleSetCurrUser } = userSlice.actions;

export default userSlice.reducer;
