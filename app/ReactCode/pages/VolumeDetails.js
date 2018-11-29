import React from "react";

export default class VolumeDetials extends React.Component {
  constructor(props) {
    super(props);
    // alert(JSON.stringify(props));
  }

  componentDidMount() {
    console.log("=====VOLUME component MOUNTED");
  }

  componentWillUnmount() {
    console.log("===Volume component will UNMOUNT");
  }

  render() {
    return (
      <div>
        <p> Volume details page </p>
        <button onClick={() => this.props.route.transitionTo("home-route")}>
          Move Back to Home
        </button>
      </div>
    );
  }
}
