import Controller from "@ember/controller";

export default Controller.extend({
  welcomeNote: "Welcome to Ember+React page!",
  showCallBack: true,
  options: {
    title: {
      text: "High Chart"
    },
    series: [
      {
        data: [1, 2, 3, 4, 5]
      }
    ]
  },
  actions: {
    sampleCallback() {
      this.toggleProperty("showCallBack");
    }
  }
});
