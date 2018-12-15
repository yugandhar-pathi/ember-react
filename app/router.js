import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("home-route");
  this.route("login-route");
  this.route("volume-details", { path: "volume-details/:volumedetail_id" });
});

export default Router;
