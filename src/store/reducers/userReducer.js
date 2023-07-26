// reducers/userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    loginUser: (state, action) => {
      return action.payload;
    },
    logoutUser: () => {
      return null;
    }
    // more reducers as needed
  }
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
