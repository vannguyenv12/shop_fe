import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './toast/toast.slice';
import userReducer from './user/user.slice';

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    user: userReducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
