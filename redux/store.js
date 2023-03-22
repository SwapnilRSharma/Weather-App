import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  FLUSH,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import createMigrate from "redux-persist/es/createMigrate";

const rootReducer = combineReducers({
  weather: dataReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  // blacklist: ["weather"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, FLUSH],
      },
    }),
  stateReconciler: autoMergeLevel2,
  // migrate: createMigrate(migrations, { debug: true }),
  devTools: true,
});

export const persistor = persistStore(store);
