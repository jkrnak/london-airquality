import React, { PropTypes } from 'react'

export default function MeasurementRow(props) {
    const levelToClassName = (level) => {
        if (typeof level === "string") {
            return level.replace(/\s/, '-').toLocaleLowerCase();
        }
        return null;
    };

    return (<tr>
            <td>{ props.measurement.name }</td>
            <td className={ levelToClassName(props.measurement.no2) }>{ props.measurement.no2 }</td>
            <td className={ levelToClassName(props.measurement.o3) }>{ props.measurement.o3 }</td>
            <td className={ levelToClassName(props.measurement.pm10) }>{ props.measurement.pm10 }</td>
            <td className={ levelToClassName(props.measurement.pm25) }>{ props.measurement.pm25 }</td>
            <td className={ levelToClassName(props.measurement.so2) }>{ props.measurement.so2 }</td>
        </tr>
    );
}


MeasurementRow.propTypes = {
    measurement: PropTypes.shape({
        name: PropTypes.string.isRequired,
        no2: PropTypes.string,
        o3: PropTypes.string,
        so2: PropTypes.string,
        pm10: PropTypes.string,
        pm25: PropTypes.string
    })
}