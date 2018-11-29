import ReactWrapper from "../reactwrapper/ReactWrapper";
import SampleReactComp from "../ReactCode/components/SampleReactComp";
import { inject as service } from "@ember/service";
import { Provider } from "react-redux";
import store from "../ReactCode/mystore/appstore";

export default ReactWrapper.extend({
  router: service(),

  didReceiveAttrs() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);
    this.reactRender(
      <Provider store={store}>
        <SampleReactComp
          options={this.options}
          router={this.router}
          sampleCallBack={this.onSampleCallBack}
        />
      </Provider>,
      "reactPlaceHolder"
    );
  },
  willDestroyElement() {
    this.willDestroyComponent();
  }
});
