import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return {
      options: {
        title: {
          text: "High Chart"
        },
        series: [
          {
            data: [1, 2, 3, 4, 5]
          }
        ]
      }
    };
  },

  actions: {
    logout() {
      this.transitionTo("login-route");
    }
  }
});
