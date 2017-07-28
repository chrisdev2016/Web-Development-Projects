import React from 'react';


class Select extends React.Component {
    render() {
        return (
            <select className="floatStyle" value={this.props.selectvalue} onChange={this.props.onSelect}>
                <option value="all">all</option>
                <option value="active">active</option>
                <option value="complete">complete</option>
            </select>

        )
    }

}

export default Select