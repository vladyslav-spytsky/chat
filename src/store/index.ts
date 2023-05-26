import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainInfoReducer from "./mainInfo.slice";

const rootReducer = combineReducers({
  mainInfo: mainInfoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

const makeStore = () => store;



