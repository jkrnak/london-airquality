import {
    startFetching,
    fetchingSuccess,
    fetchingFailure,
    FETCHING_REQUESTED,
    FETCHING_SUCCESS,
    FETCHING_FAILURE } from '../../src/store/actions'
import { expect } from 'chai'

describe('actions', () => {
    it('should be able to create a startFetching action', () => {
        const action = startFetching();
        expect(action).to.deep.equal({
            type: FETCHING_REQUESTED
        });
    });

    it('should be able to create a fetch successful action', () => {
        const action = fetchingSuccess([{
            name: 'Crouch End',
            no2: 'low'
        }]);
        expect(action).to.deep.equal({
            type: FETCHING_SUCCESS,
            measurements: [
                {
                    name: 'Crouch End',
                    no2: 'low'
                }
            ]
        });
    });

    it('should be able to create a fetch failed action', () => {
        const action = fetchingFailure('timeout occurred');
        expect(action).to.deep.equal({
            type: FETCHING_FAILURE,
            error: 'timeout occurred'
        });
    });
});