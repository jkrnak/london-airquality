import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MeasurementTable from '../MeasurementTable/MeasurementTable'

export function AirQualityContainer(props)  {
    let preloader = '';
    if (props.isFetching) {
        preloader = (
            <div className="row">
                <div className="col s1">
                    <div className="preloader-wrapper active small">
                        <div className="spinner-layer spinner-green-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    Please wait. Data being loaded from external API, it can take up to 30 seconds.
                </div>
            </div>
        );
    }
    return (<div>
        <h2>Latest air quality of London</h2>
        { preloader }
        <div className="row">
            <div className="col s12">
                <MeasurementTable measurements={ props.measurements }/>
            </div>
        </div>
    </div>);
}

AirQualityContainer.propTypes = {
    measurements: MeasurementTable.propTypes.measurements,
    isFetching: PropTypes.bool.isRequired
};

AirQualityContainer.defaultProps = {
    measurements: [],
    isFetching: true
};

const mapStateToProps = (state) => {
    return {
        measurements: state.measurements,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps)(AirQualityContainer)
