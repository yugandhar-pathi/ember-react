import Route from "@ember/routing/route";

export default Route.extend({
  // model() {
  //   return this.store
  //     .queryRecord("volume-detail", {})
  //     .then(function(volumeDetail) {
  //       return {
  //         agenttype: volumeDetail.get("agenttype"),
  //         volumesize: volumeDetail.get("volumesize")
  //       };
  //     });
  // },

  actions: {
    logout() {
      this.transitionTo("login-route");
    }
  }
});
