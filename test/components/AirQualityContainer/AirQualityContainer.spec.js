import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import AirQualityContainer from '../../../src/components/AirQualityContainer/AirQualityContainer'

describe('<AirQualityContainer/>', () => {
    it('should have a table', () => {
       const wrapper = shallow(<AirQualityContainer/>);
       expect(wrapper.find('table')).to.have.length(1);
    });

    it('should have a header row with with headers named: Site, NO2, O3, PM10, SO2', () => {
       const wrapper = shallow(<AirQualityContainer/>);
       expect(wrapper.find('table').find('thead').find('tr')).to.have.length(1);
       const headRow = wrapper.find('table').find('thead').find('tr');
       const expectedHeaders = ['Site', 'NO2', 'O3', 'PM10', 'SO2'];

       for (let i = 0; i < expectedHeaders.length; i++) {
           expect(headRow.find('th').at(i).text()).to.have.string(expectedHeaders[i]);
       }
    });

    it('shout have an empty body', () => {
        const wrapper = shallow(<AirQualityContainer/>)

        expect(wrapper.find('table').find('tbody')).to.have.length(1);
    });
});