import React from 'react';
//import { render } from 'react-dom'
import Highcharts from 'highcharts';
import HighchartsReact from './HighchartsReact'; // work around - Copied to app folder from node_modules 

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

export default class SampleHighchart  extends React.Component {
    render(){
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        );
    }
}

//render(<SampleHighchart />, document.getElementById('renderReact'))