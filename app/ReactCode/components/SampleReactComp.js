import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";
import store from "../mystore/appstore";

class SampleReactComp extends React.Component {
  componentDidMount() {
    store.getVolumes().then(volumes => this.props.setVolumes(volumes));
  }

  componentWillUnmount() {
    console.log("====sample highcharts will UNMOUNT");
  }

  goToVolumeDetails(volumeId) {
    this.props.router.transitionTo("volume-details", volumeId);
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
            <input
              type="button"
              value="Logout"
              onClick={() => this.props.router.transitionTo("login-route")}
            />
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
              Integrate Redux, Initial state : {this.props.counter}
            </p>
            <input
              type="button"
              value="Increment State"
              onClick={this.props.increment}
            />
          </li>
        </ul>
        <h4>Render response from Rest service</h4>
        <table style={{ border: "1px dotted black" }}>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.volumes.length > 0 &&
              this.props.volumes.map((item, index) => (
                <tr key={index}>
                  <th style={{ border: "1px dotted black" }}>
                    <u onClick={() => this.goToVolumeDetails(index)}>
                      {item.title}
                    </u>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
        <h4>Render highcharts(Data is from Ember)</h4>
        <HighchartsReact highcharts={Highcharts} options={this.props.options} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(JSON.stringify(state));
  return {
    counter: state.counter,
    volumes: state.volumes
  };
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "Increment", counter: 2 }),
  setVolumes: volumes => dispatch({ type: "SET_VOLUME_LIST", volumes: volumes })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleReactComp);
