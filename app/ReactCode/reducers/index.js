import { combineReducers } from "redux";
import * as volumeReducer from "./volumes";
import * as sampleReducer from "./sampleReducer";

export default combineReducers(Object.assign(volumeReducer, sampleReducer));
