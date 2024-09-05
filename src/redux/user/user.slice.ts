import { createSlice } from '@reduxjs/toolkit';

interface IUserPayload {
  user: IUserData;
  isAuthenticated: boolean;
}

const initialState: IUserPayload = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    role: 'USER',
  },
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.email = action.payload.email;
      state.user.avatar = action.payload.avatar;
      state.user.role = action.payload.role;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = {
        firstName: '',
        lastName: '',
        email: '',
        avatar: '',
        role: 'USER',
      };

      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
