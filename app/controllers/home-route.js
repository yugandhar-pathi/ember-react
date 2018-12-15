import Controller from "@ember/controller";

export default Controller.extend({
  welcomeNote: "Welcome to Ember+React page!",
  showCallBack: true,
  actions: {
    sampleCallback() {
      this.toggleProperty("showCallBack");
    }
  }
});
