import React from 'react'
import AirQualityContainer from './AirQualityContainer/AirQualityContainer'

export default class App extends React.Component {
    render() {
        return (<div className="container">
                <AirQualityContainer/>
                <div className="row">
                <p>The application uses air quality data from <a href="http://www.londonair.org.uk/LondonAir/API/" target="_blank">London Air</a>{ ' ' }
                    which is licenced under the <a href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/" target="_blank">Open Goverment Licence v2</a></p>
                </div>
            </div>
        )
    }
}