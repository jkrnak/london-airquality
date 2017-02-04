import { FETCHING_REQUESTED, FETCHING_SUCCESS, FETCHING_FAILURE } from '../../src/store/actions'
import reducer from '../../src/store/reducers'
import { expect } from 'chai'

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).to.deep.equal({
            measurements: [],
            isFetching: false,
            error: null
        });
    });

    it('should handle requesting fetching latest data', () => {
        expect(
            reducer({
                measurements: [{ name: 'Crouch End' }],
                isFetching: false,
                error: 'some previous error'
            }, {
                type: FETCHING_REQUESTED,
            })
        ).to.deep.equal({
            measurements: [{ name: 'Crouch End'}],
            isFetching: true,
            error: null
        });
    });

    it('should handle receiving data', () => {
        expect(
            reducer({
                measurements: [{ name: 'Crouch End' }],
                isFetching: false,
                error: 'some previous error'
            }, {
                type: FETCHING_SUCCESS,
                measurements: [
                    {
                        name: 'Oxford Circus',
                        pm10: 'extreme'
                    }
                ]
            })
        ).to.deep.equal({
            measurements: [
                {
                    name: 'Oxford Circus',
                    pm10: 'extreme'
                }
            ],
            isFetching: false,
            error: null
        });
    });

    it('should handle failure case', () => {
        expect(
            reducer({
                measurements: [{ name: 'Crouch End' }],
                isFetching: true,
                error: null
            }, {
                type: FETCHING_FAILURE,
                error: 'no route to host'
            })
        ).to.deep.equal({
            measurements: [{ name: 'Crouch End'}],
            isFetching: false,
            error: 'no route to host'
        });
    });
});