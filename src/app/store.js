import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../slices/favourites/favouritesSlice";
import resultsReducer from "../slices/results/resultsSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // <-- this is the localStorage engine
// import { encryptTransform } from "redux-persist-transform-encrypt";

const reducers = combineReducers({
  favourites: favouritesReducer,
  results: resultsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // transforms: [
  //   encryptTransform({
  //     secretKey: process.env.REACT_APP_PERSIST_KEY,
  //   }),
  // ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});
