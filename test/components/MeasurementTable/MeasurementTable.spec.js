import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import MeasurementTable from '../../../src/components/MeasurementTable/MeasurementTable'
import MeasurementRow from '../../../src/components/MeasurementRow/MeasurementRow'

describe('<MeasurementTable/>', () => {
    it('should have a header row with with headers named: Site, NO2, O3, PM10, SO2', () => {
        const wrapper = shallow(<MeasurementTable/>);
        expect(wrapper.find('table').find('thead').find('tr')).to.have.length(1);
        const headRow = wrapper.find('table').find('thead').find('tr');
        const expectedHeaders = ['Site', 'NO2', 'O3', 'PM10', 'SO2'];

        for (let i = 0; i < expectedHeaders.length; i++) {
            expect(headRow.find('th').at(i).text()).to.have.string(expectedHeaders[i]);
        }
    });

    it('should have two MeasurementRows when passing in two items', () => {
        const measurements = [
            {
                name: 'Crouch End',
                no2: 'low'
            },
            {
                name: 'Oxford Circus',
                pm10: 'high'
            }
        ];
        const wrapper = shallow(<MeasurementTable measurements={ measurements }/>);

        expect(wrapper.find('table').find('tbody')).to.have.length(1);
        expect(wrapper.find('table').find('tbody').find(MeasurementRow)).to.have.length(2);

        const measurementRows = wrapper.find('table').find('tbody').find(MeasurementRow);
        expect(measurementRows.at(0).props().measurement).to.be.equal(measurements[0]);
        expect(measurementRows.at(0).key()).to.be.equal(measurements[0].name);
        expect(measurementRows.at(1).props().measurement).to.be.equal(measurements[1]);
        expect(measurementRows.at(1).key()).to.be.equal(measurements[1].name);
    });
});