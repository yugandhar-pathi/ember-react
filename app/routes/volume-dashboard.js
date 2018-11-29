import { on } from "@ember/object/evented";
import Route from "@ember/routing/route";
import ReactDom from "react-dom";
import VolumeDetails from "../ReactCode/pages/VolumeDetails";

export default Route.extend({
  unmountReactComponent: on("deactivate", function() {
    console.log("about to unmount React comp");
    ReactDOM.unmountComponentAtNode(document.getElementById("volumeDashBoard"));
  }),

  actions: {
    didTransition() {
      setTimeout(() => {
        ReactDom.render(
          <VolumeDetails route={this} />,
          document.getElementById("volumeDashBoard")
        );
      }, 0);
    }
  }
});
