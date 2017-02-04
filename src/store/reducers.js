import { FETCHING_REQUESTED, FETCHING_SUCCESS, FETCHING_FAILURE } from './actions'

const initialState = {
    measurements: [],
    isFetching: false,
    error: null
};

function airQualityReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCHING_SUCCESS:
            return {
                measurements: action.measurements,
                isFetching: false,
                error: null
            };
        case FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default airQualityReducer;