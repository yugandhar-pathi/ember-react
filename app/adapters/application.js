import DS from "ember-data";
import RSVP from "rsvp";
import ReduxStore from "../ReactCode/mystore/appstore";

export default DS.JSONAPIAdapter.extend({
  host: "http://localhost:3000",

  findRecord(store, type, id, snapshot) {
    return new RSVP.Promise(function(resolve, reject) {
      ReduxStore.getVolumeDetails(id).then(
        function(data) {
          console.log("data from redux store" + JSON.stringify(data));
          //resolve(data);
          let volume_details = {
            data: {
              type: type.modelName,
              id,
              attributes: data
            }
          };
          resolve(volume_details);
        },
        function(jqXHR) {
          reject(jqXHR);
        }
      );
    });
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
