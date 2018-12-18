import DS from "ember-data";
import RSVP from "rsvp";
import ReduxStore from "../ReactCode/mystore/appstore";

export default DS.JSONAPIAdapter.extend({
  host: "http://localhost:3000",

  readVolumeDetails(store, type, id, snapshot) {
    return new RSVP.Promise(function(resolve, reject) {
      ReduxStore.getVolumeDetails(id).then(
        function(data) {
          console.log("data from redux store" + JSON.stringify(data));
          resolve(data);
        },
        function(jqXHR) {
          reject(jqXHR);
        }
      );
    });
  },

  findRecord(store, type, id, snapshot) {
    if (type.modelName === "volume-detail") {
      return this.readVolumeDetails(store, type, id, snapshot);
    }
  },
  // store,type,sinceToken,snapshotRecordArray
  queryRecord(store, type, query) {
    let url = this.buildURL(type.modelName);
    return new RSVP.Promise(function(resolve, reject) {
      $.getJSON(url).then(
        function(data) {
          resolve(data);
        },
        function(jqXHR) {
          reject(jqXHR);
        }
      );
    });
  }
});
