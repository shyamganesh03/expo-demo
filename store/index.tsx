import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducers from "./reducer";

const persistConfig = {
  key: "user-details",
  storage: AsyncStorage,
};

const initialData: any = {
  userDetails: {
    default: {
      emailId: "",
      fullName: "",
      gender: "",
      phoneNo: "",
    },
    currentUser: "",
  },
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, initialData);
const persistor = persistStore(store);

export { store, persistor };
