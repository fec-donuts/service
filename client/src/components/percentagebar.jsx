import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './bar.jsx';
import Filler from './filler.jsx';

class PercentageBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percentage: 0
        }
    }

    render() {
        return(
            <div>
                <Bar percentage={this.state.percentage}/>
            </div>
        )
    }
}

export default PercentageBar