import { combineReducers } from "redux";
import volumes from "./volumes";
import counter from "./sampleReducer";

export default combineReducers({ volumes, counter });
