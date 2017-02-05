import React, { PropTypes } from 'react'

export default function MeasurementRow(props) {
    return (<tr>
            <td>{ props.measurement.name }</td>
            <td>{ props.measurement.no2 }</td>
            <td>{ props.measurement.pm10 }</td>
            <td>{ props.measurement.so2 }</td>
            <td>{ props.measurement.o3 }</td>
        </tr>
    );
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