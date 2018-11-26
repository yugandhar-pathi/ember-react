import Controller from "@ember/controller";

export default Controller.extend({
  welcomeNote: "Welcome to Ember+React page!",
  actions: {
    sampleCallback() {
      $("#callbackDiv").toggle();
    }
  }
});
