import React, {Component} from 'react';

class Feedback extends Component {
    render() {
        var className = 'feedback' + this.props.status;
        return (
            <p className={className}>{this.props.feedback}</p>
        );
    }
}
export default Feedback;
