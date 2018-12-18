import { createStore } from "redux";
import reducer from "../reducers";

let store = createStore(reducer);

store.getVolumes = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/volumes")
      .then(volumes => volumes.json())
      .then(volumes => {
        resolve(volumes);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

store.getVolumeDetails = id => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/volumes")
      .then(volumes => volumes.json())
      .then(volumes => {
        console.log(volumes);
        resolve(volumes[id]);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default store;
