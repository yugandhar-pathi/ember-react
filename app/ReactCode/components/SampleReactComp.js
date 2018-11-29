import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";

class SampleReactComp extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.router.transitionTo("login-route");
  }

  componentDidMount() {
    console.log("====sample high charts will Mount");
  }

  componentWillUnmount() {
    console.log("====sample highcharts will UNMOUNT");
  }

  render() {
    const displayInline = { display: "inline" };
    return (
      <div style={{ border: "1px solid black", borderRadius: "5px" }}>
        <h3>React Component</h3>
        <ul>
          <li>
            <p style={displayInline}>
              Calling Ember route in React Component -->{" "}
            </p>
            <input type="button" value="Logout" onClick={this.onLogout} />
          </li>
          <li>
            <p style={displayInline}>Callback to Ember --> </p>
            <input
              type="button"
              value="TriggerCallback"
              onClick={this.props.sampleCallBack}
            />
          </li>
          <li>
            <p style={displayInline}>
              Integrate Redux, Initial state : {this.props.storeState}{" "}
            </p>
            <input
              type="button"
              value="Increment State"
              onClick={this.props.increment}
            />
          </li>
        </ul>
        <h4>Render highcharts(Data is from Ember)</h4>
        <HighchartsReact highcharts={Highcharts} options={this.props.options} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storeState: state.counter
  };
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "Increment", counter: 2 })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleReactComp);
