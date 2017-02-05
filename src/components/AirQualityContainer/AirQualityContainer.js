import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MeasurementTable from '../MeasurementTable/MeasurementTable'

export function AirQualityContainer(props)  {
    return (<div>
        <h2>Latest air quality of London</h2>
        <MeasurementTable measurements={ props.measurements } isFetching={ props.isFetching }/>
    </div>);
}

AirQualityContainer.propTypes = {
    measurements: MeasurementTable.propTypes.measurements
};

AirQualityContainer.defaultProps = {
    measurements: []
};

const mapStateToProps = (state) => {
    return {
        measurements: state.measurements
    };
};

export default connect(mapStateToProps)(AirQualityContainer)
