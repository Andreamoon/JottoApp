import { configureStore as createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);
