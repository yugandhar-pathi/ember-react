import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "High Chart"
  },
  series: [
    {
      data: [1, 2, 3]
    }
  ]
};

export default class SampleHighchart extends React.Component {
  render() {
    return (
      <div>
        <p>This is a React high chart component</p>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
