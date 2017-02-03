import React, { PropTypes } from 'react'

export default class MeasurementRow extends React.Component {
    render() {
        return (<tr>
                <td>{ this.props.measurement.name }</td>
                <td>{ this.props.measurement.no2 }</td>
                <td>{ this.props.measurement.pm10 }</td>
                <td>{ this.props.measurement.so2 }</td>
                <td>{ this.props.measurement.o3 }</td>
            </tr>
        );
    }
}

MeasurementRow.propTypes = {
    measurement: PropTypes.shape({
        name: PropTypes.string.isRequired,
        no2: PropTypes.string,
        o3: PropTypes.string,
        so2: PropTypes.string,
        pm10: PropTypes.string
    })
}