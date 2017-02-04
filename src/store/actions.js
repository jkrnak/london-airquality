export const FETCHING_REQUESTED = 'FETCHING_REQUESTED';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export function startFetching() {
    return {
        type: FETCHING_REQUESTED
    }
}

export function fetchingSuccess(measurements) {
    return {
        type: FETCHING_SUCCESS,
        measurements
    }
}

export function fetchingFailure(error) {
    return {
        type: FETCHING_FAILURE,
        error
    }
}
