import { FETCHING_REQUESTED, fetchingSuccess, fetchingFailure } from '../../src/store/actions'
import { latestAirQualityDataSaga } from '../../src/store/sagas'
import { expect } from 'chai'
import { call, put, take } from 'redux-saga/effects'
import AirQualityApi from '../../src/helpers/AirQualityApi'

describe('latest air quality saga', () => {
    it('should wait for FETCHING_REQUESTED', () => {
        const saga = latestAirQualityDataSaga();

        expect(saga.next().value).to.deep.equal(take(FETCHING_REQUESTED));
    });

    it('should create an API call', () => {
        const saga = latestAirQualityDataSaga();
        const airQualityApi = new AirQualityApi();

        saga.next();

        expect(saga.next().value).to.deep.equal(call(airQualityApi.fetchLatest));
    });

    it('should fire an action on success with the measurements', () => {
        const saga = latestAirQualityDataSaga();

        saga.next();
        saga.next();

        expect(saga.next([
            {
                name: 'Crouch End',
                pm10: 'low'
            }
        ]).value).to.deep.equal(put(fetchingSuccess([
            {
                name: 'Crouch End',
                pm10: 'low'
            }
        ])));
    });

    it('should fire an action on failure with the error message', () => {
        const saga = latestAirQualityDataSaga();

        saga.next();
        saga.next();

        expect(saga.throw('connection timeout').value).to.deep.equal(put(fetchingFailure('connection timeout')));
    });
});
