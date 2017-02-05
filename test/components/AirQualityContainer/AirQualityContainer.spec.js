import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { AirQualityContainer } from '../../../src/components/AirQualityContainer/AirQualityContainer'
import MeasurementTable from '../../../src/components/MeasurementTable/MeasurementTable'

describe('<AirQualityContainer/>', () => {
    it('should have a MeasurementTable', () => {
        const wrapper = shallow(<AirQualityContainer isFetching={ false }/>);
        expect(wrapper.find(MeasurementTable)).to.have.length(1);
    });

    it('should have a loader animation while fetching', () => {
        const wrapper = shallow(<AirQualityContainer isFetching={ true }/>)
        expect(wrapper.find('div[className="preloader-wrapper active small"]')).to.have.length(1);
    });

    it('should hide the animation when fetching has finished', () => {
        const wrapper = shallow(<AirQualityContainer isFetching={ false }/>)
        expect(wrapper.find('div[className="preloader-wrapper active small"]')).to.have.length(0);
    });
});