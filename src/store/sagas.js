import { call, put, take } from 'redux-saga/effects'
import { FETCHING_REQUESTED, fetchingSuccess, fetchingFailure } from './actions'
import AirQualityApi from '../helpers/AirQualityApi'

export function* latestAirQualityDataSaga() {
    yield take(FETCHING_REQUESTED);
    try {
        let airQualityApi = new AirQualityApi();
        let measurements = yield call(airQualityApi.fetchLatest);
        yield put(fetchingSuccess(measurements))
    } catch (error) {
        yield put(fetchingFailure(error))
    }
}

export default function* rootSaga() {
    yield [
        latestAirQualityDataSaga()
    ];
}