import React, { PropTypes } from 'react'
import MeasurementRow from '../MeasurementRow/MeasurementRow'

export default class MeasurementTable extends React.Component {
    render() {
        let measurementRows = this.props.measurements.map((measurement) => {
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
                    <th>SO<sub>2</sub></th>
                </tr>
                </thead>
                <tbody>
                { measurementRows }
                </tbody>
            </table>
        );
    }
}

MeasurementTable.propTypes = {
    measurements: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        no2: PropTypes.string,
        o3: PropTypes.string,
        so2: PropTypes.string,
        pm10: PropTypes.string
    }))
};

MeasurementTable.defaultProps = {
    measurements: []
};