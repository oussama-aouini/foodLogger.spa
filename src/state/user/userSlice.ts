import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  streak: number; // number of consucetive days user logged his food
}

const initialState: UserState = {
  streak: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.streak += 1;
    },
    reset: (state) => {
      state.streak = 0;
    },
  },
});

export const { increment, reset } = userSlice.actions;

export default userSlice.reducer;
