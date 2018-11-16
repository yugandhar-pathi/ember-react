import React from 'react';
import ReactWrapper from '../reactwrapper/ReactWrapper';
import SampleHighchart from  '../reactcomponents/SampleHighchart';

//let Greeter = ({name}) => <h2>Hello from {name}!!!</h2>;

export default ReactWrapper.extend({
    didInsertElement() {
        this._super(...arguments);
        // this.reactRender(<Greeter name="React"/>);
        this.reactRender(<SampleHighchart/>);
      }
});
