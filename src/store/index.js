import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const persistConfig = {
  key: "root",
  blacklist: ["tempSetting", "userInterface"],
  whitelist: ["authUser"],
  storage,
};

const middlewares = [thunkMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares))
  );

  let persistor = persistStore(store, [{ manualPersist: true }]);
  return { store, persistor };
};
