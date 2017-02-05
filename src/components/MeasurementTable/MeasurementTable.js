import React, { PropTypes } from 'react'
import MeasurementRow from '../MeasurementRow/MeasurementRow'

export default function MeasurementTable(props) {
    let measurementRows = props.measurements.map((measurement) => {
        return (<MeasurementRow key={ measurement.name } measurement={ measurement }/>);
    });
    return (
        <table>
            <thead>
            <tr>
                <th>Site</th>
                <th>NO<sub>2</sub></th>
                <th>O<sub>3</sub></th>
                <th>PM10</th>
                <th>PM25</th>
                <th>SO<sub>2</sub></th>
            </tr>
            </thead>
            <tbody>
            { measurementRows }
            </tbody>
        </table>
    );
}

MeasurementTable.propTypes = {
    measurements: PropTypes.arrayOf(MeasurementRow.propTypes.measurement)
};

MeasurementTable.defaultProps = {
    measurements: []
};