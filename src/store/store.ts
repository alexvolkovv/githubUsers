import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/UsersReducer/userSlice";
import userReducer from "./reducers/UserReducer/userSlice";

const rootReducer = combineReducers({
  usersReducer,
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
