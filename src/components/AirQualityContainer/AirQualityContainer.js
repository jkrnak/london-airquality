import React from 'react'

export default class AirQualityContainer extends React.Component {
    render() {
        return (<div className="air-quality-container">
            <h2>Latest air quality of London</h2>
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

                </tbody>
            </table>
        </div>);
    }
}