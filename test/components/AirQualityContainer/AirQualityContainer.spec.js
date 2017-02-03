import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import AirQualityContainer from '../../../src/components/AirQualityContainer/AirQualityContainer'
import MeasurementTable from '../../../src/components/MeasurementTable/MeasurementTable'

describe('<AirQualityContainer/>', () => {
    it('should have a MeasurementTable', () => {
       const wrapper = shallow(<AirQualityContainer/>);
       expect(wrapper.find(MeasurementTable)).to.have.length(1);
    });
});