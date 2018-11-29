import { createStore } from "redux";
import reducer from "../reducers";

let store = createStore(reducer);

//store.subscribe(() => console.log(store.getState()));

export default store;

//store.dispatch({ type: "Increment" });
