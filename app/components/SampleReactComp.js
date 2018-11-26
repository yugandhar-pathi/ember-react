import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default class SampleReactComp extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    //alert("on logout");
    this.props.router.transitionTo("login-route");
  }

  render() {
    return (
      <div style={{ border: "1px solid black", borderRadius: "5px" }}>
        <p>This is a React high chart component rendered via bridge</p>
        <p>Handling route inside a react component.</p>
        <input
          type="button"
          value="TriggerCallback"
          onClick={this.props.sampleCallBack}
        />
        <input type="button" value="Logout" onClick={this.onLogout} />
        <HighchartsReact highcharts={Highcharts} options={this.props.options} />
      </div>
    );
  }
}
