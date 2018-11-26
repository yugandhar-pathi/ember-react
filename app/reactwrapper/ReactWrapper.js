import Component from "@ember/component";
import ReactDOM from "react-dom";

export default Component.extend({
  /**
   * We don't need a template since we're only creating a
   * wrapper for our React component
   **/
  layout: "",

  /**
   * Element on which react component is rendered
   */
  id: "",

  /**
   * Renders a react component as the current ember element
   * @param {React.Component} reactComponent. e.g., <HelloWorld />
   */
  reactRender(reactComponent, id) {
    this.id = id;
    ReactDOM.render(reactComponent, document.getElementById(id));
  },

  /**
   * Removes a mounted React component from the DOM and
   * cleans up its event handlers and state.
   */
  unmountReactElement() {
    ReactDOM.unmountComponentAtNode(document.getElementById(this.id));
  },

  /**
   * Cleans up the rendered react component as the ember
   * component gets destroyed
   */
  willDestroyComponent() {
    this._super();
    this.unmountReactElement();
  }
});
