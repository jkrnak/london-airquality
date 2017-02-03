import React, { PropTypes } from 'react'
import MeasurementTable from '../MeasurementTable/MeasurementTable'
import 'whatwg-fetch'

export default class AirQualityContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    componentDidMount() {
        fetch(this.props.source)
            .then(response => {
                return response.json();
            }).then(json => {
                let measurements = [];

                json.DailyAirQualityIndex.LocalAuthority.forEach(localAuthority => {
                    if (typeof localAuthority.Site === 'object' && Array.isArray(localAuthority.Site)) {
                        const site = localAuthority.Site;
                        site.forEach(siteInfo => {
                            let measurement = {
                                name: siteInfo['@SiteName']
                            };

                            if (typeof siteInfo.Species === 'object' && Array.isArray(siteInfo.Species)) {
                                console.log('Found species');
                                siteInfo.Species.forEach(species => {
                                    console.log(species);
                                    measurement[species['@SpeciesCode'].toLowerCase()] = species['@AirQualityBand'];
                                });
                            }

                            measurements.push(measurement);
                        });
                    }
                });

                return measurements;
            }).then(measurements => {
                this.setState(Object.assign({}, this.props, { measurements: measurements }));
            });
    }

    render() {
        return (<div>
            <h2>Latest air quality of London</h2>
            <MeasurementTable measurements={ this.state.measurements }/>
        </div>);
    }
}

AirQualityContainer.propTypes = {
    measurements: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        no2: PropTypes.string,
        o3: PropTypes.string,
        so2: PropTypes.string,
        pm10: PropTypes.string
    })),
    source: PropTypes.string.isRequired
};

AirQualityContainer.defaultProps = {
    measurements: [],
    source: 'http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/GroupName=London/json'
};