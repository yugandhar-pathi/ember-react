import ReactWrapper from "../reactwrapper/ReactWrapper";
import SampleReactComp from "./SampleReactComp";
import { inject as service } from "@ember/service";

export default ReactWrapper.extend({
  router: service(),

  didReceiveAttrs() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);
    this.reactRender(
      <SampleReactComp
        options={this.options}
        router={this.router}
        sampleCallBack={this.onSampleCallBack}
      />,
      "reactPlaceHolder"
    );
  }
});
