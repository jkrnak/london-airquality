import 'isomorphic-fetch'

export const API_HOST = 'http://api.erg.kcl.ac.uk'
export const ENDPOINT_AIR_QUALITY_LATEST = '/AirQuality/Daily/MonitoringIndex/Latest/GroupName=London/json';

export default class AirQualityApi {
    fetchLatest() {
        return fetch(API_HOST + ENDPOINT_AIR_QUALITY_LATEST)
            .then(response => response.json())
            .catch(error => error)
            .then(json => {
                let measurements = [];

                json.DailyAirQualityIndex.LocalAuthority.forEach(localAuthority => {
                    if (typeof localAuthority.Site === 'object' && Array.isArray(localAuthority.Site)) {
                        const site = localAuthority.Site;
                        site.forEach(siteInfo => {
                            let measurement = {
                                name: siteInfo['@SiteName']
                            };

                            if (typeof siteInfo.Species === 'object' && Array.isArray(siteInfo.Species)) {
                                siteInfo.Species.forEach(species => {
                                    measurement[species['@SpeciesCode'].toLowerCase()] = species['@AirQualityBand'];
                                });
                            }

                            measurements.push(measurement);
                        });
                    }
                });

                return measurements;
            });
    }
}
