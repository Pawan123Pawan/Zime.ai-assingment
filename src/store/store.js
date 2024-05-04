import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import postsReducer from "./potsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, postsReducer);

const store = configureStore({
  reducer: {
    posts: persistedReducer,
  },
});

export const persistor = persistStore(store);

export default store;
