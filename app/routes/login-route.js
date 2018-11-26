import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    onLogin() {
      let username = this.get("controller").get("Username");
      let password = this.get("controller").get("password");
      if (username.length === 0 || password.length === 0) {
        alert("useranme or password can't be empty");
      } else {
        this.transitionTo("home-route");
      }
    }
  }
});
