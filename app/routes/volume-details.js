import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.findRecord("volume-detail", params["volume-detail_id"]);
  },
  actions: {
    backToVolumeList: function() {
      console.log("reach action method");
      this.transitionTo("home-route");
    }
  }
});
