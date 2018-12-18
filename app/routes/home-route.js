import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model() {
    return RSVP.hash({
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
      userDetails: this.store.queryRecord("user-details", "admin")
    });
  },

  actions: {
    logout() {
      this.transitionTo("login-route");
    }
  }
});
