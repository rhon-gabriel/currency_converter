import { combineReducers } from "redux";
import converterReducer from "../containers/Converter/redux/reducer";

const rootReducer = combineReducers({
  converter: converterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;