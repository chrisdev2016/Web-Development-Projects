import React from 'react';



class ClearButton extends React.Component {
    render() {
        return (
            <button className="pull-right btn btn-default" onClick={this.props.onClick}>ClearButton</button>
        )

    }
}

export default ClearButton