import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import nock from 'nock'
import AirQualityApi, { API_HOST, ENDPOINT_AIR_QUALITY_LATEST } from '../../src/helpers/AirQualityApi'

const API_RESPONSE = {
    "DailyAirQualityIndex": {
        "@MonitoringIndexDate": "2017-02-03 00:00:00",
        "@GroupName": "London",
        "@TimeToLive": "39",
        "LocalAuthority": [
            {
                "@LocalAuthorityCode": "1",
                "@LocalAuthorityName": "Barking and Dagenham",
                "@LaCentreLatitude": "51.538435",
                "@LaCentreLongitude": "0.11467",
                "@LaCentreLatitudeWGS84": "6717095.01808",
                "@LaCentreLongitudeWGS84": "12765.0060093",
                "Site": [
                    {
                        "@BulletinDate": "2017-02-03 00:00:00",
                        "@SiteCode": "BG2",
                        "@SiteName": "Barking and Dagenham - Scrattons Farm",
                        "@SiteType": "Suburban",
                        "@Latitude": "51.529389",
                        "@Longitude": "0.132857",
                        "@LatitudeWGS84": "6715476.18683",
                        "@LongitudeWGS84": "14789.5735883",
                        "Species": [
                            {
                                "@SpeciesCode": "NO2",
                                "@SpeciesDescription": "Nitrogen Dioxide",
                                "@AirQualityIndex": "1",
                                "@AirQualityBand": "Low",
                                "@IndexSource": "Measurement"
                            },
                            {
                                "@SpeciesCode": "PM10",
                                "@SpeciesDescription": "PM10 Particulate",
                                "@AirQualityIndex": "2",
                                "@AirQualityBand": "Medium",
                                "@IndexSource": "Measurement"
                            },
                            {
                                "@SpeciesCode": "PM25",
                                "@SpeciesDescription": "PM2.5 Particulate",
                                "@AirQualityIndex": "1",
                                "@AirQualityBand": "Low",
                                "@IndexSource": "Measurement"
                            }
                        ]
                    }
                ]
            },
            {
                "@LocalAuthorityCode": "20",
                "@LocalAuthorityName": "Kensington and Chelsea",
                "@LaCentreLatitude": "51.501886",
                "@LaCentreLongitude": "-0.190895",
                "@LaCentreLatitudeWGS84": "6710556.349032",
                "@LaCentreLongitudeWGS84": "-21250.334195",
                "Site": [
                    {
                        "@BulletinDate": "2017-02-03 00:00:00",
                        "@SiteCode": "KC1",
                        "@SiteName": "Kensington and Chelsea - North Ken",
                        "@SiteType": "Urban Background",
                        "@Latitude": "51.5210467476039",
                        "@Longitude": "-0.213492139585065",
                        "@LatitudeWGS84": "6713983.58013",
                        "@LongitudeWGS84": "-23765.836267"
                    },
                    {
                        "@BulletinDate": "2017-02-03 00:00:00",
                        "@SiteCode": "KC5",
                        "@SiteName": "Kensington and Chelsea - Earls Court Rd",
                        "@SiteType": "Kerbside",
                        "@Latitude": "51.49019756",
                        "@Longitude": "-0.190863311",
                        "@LatitudeWGS84": "6708466.37696",
                        "@LongitudeWGS84": "-21246.8065916",
                        "Species": [
                            {
                                "@SpeciesCode": "NO2",
                                "@SpeciesDescription": "Nitrogen Dioxide",
                                "@AirQualityIndex": "2",
                                "@AirQualityBand": "Low",
                                "@IndexSource": "Measurement"
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('AirQualityApi', () => {
    before(() => {
        nock(API_HOST)
            .get(ENDPOINT_AIR_QUALITY_LATEST)
            .reply(200, API_RESPONSE);
    });

    after(() => {
        nock.cleanAll();
    });

    it('should be able to parse API response', () => {
        const api = new AirQualityApi();

        const promiseUnderTest = api.fetchLatest();

        return expect(promiseUnderTest).to.eventually.deep.equal([
            {
                name: 'Barking and Dagenham - Scrattons Farm',
                no2: 'Low',
                pm10: 'Medium',
                pm25: 'Low'
            },
            {
                name: 'Kensington and Chelsea - North Ken'
            },
            {
                name: 'Kensington and Chelsea - Earls Court Rd',
                no2: 'Low'
            }
        ]);
    });
});