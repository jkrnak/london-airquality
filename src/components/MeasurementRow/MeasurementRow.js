import React, { PropTypes } from 'react'

export default class MeasurementRow extends React.Component {
    render() {
        return (<tr>
                <td>{ this.props.name }</td>
                <td>{ this.props.no2 }</td>
                <td>{ this.props.pm10 }</td>
                <td>{ this.props.so2 }</td>
                <td>{ this.props.o3 }</td>
            </tr>
        );
    }
}

MeasurementRow.propTypes = {
    name: PropTypes.string.isRequired,
    no2: PropTypes.string,
    o3: PropTypes.string,
    so2: PropTypes.string,
    pm10: PropTypes.string
}