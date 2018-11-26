import Route from "@ember/routing/route";
import ReactDom from "react-dom";
import VolumeDetails from "./VolumeDetails";

export default Route.extend({
  actions: {
    didTransition() {
      setTimeout(function() {
        ReactDom.render(
          <VolumeDetails route={this.route} />,
          document.getElementById("volumeDashBoard")
        );
      }, 0);
    }
  }
});
