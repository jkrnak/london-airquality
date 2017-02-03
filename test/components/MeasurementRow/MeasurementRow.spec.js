import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import MeasurementRow from '../../../src/components/MeasurementRow/MeasurementRow'

describe('<MeasurementRow/>', () => {
    it('should be able to set properties', () => {
        const table = global.document.createElement('table');
        const tableBody = global.document.createElement('tbody');
        table.appendChild(tableBody);

        const wrapper = mount(<MeasurementRow name="Crouch End" no2="low" pm10="medium" so2="high" o3="extreme"/>, {
            'attachTo': tableBody
        });

        expect(wrapper.props().name).to.equal('Crouch End');
        expect(wrapper.props().no2).to.equal('low');
        expect(wrapper.props().pm10).to.equal('medium');
        expect(wrapper.props().so2).to.equal('high');
        expect(wrapper.props().o3).to.equal('extreme');

        expect(wrapper.find('td').at(0).text()).to.equal('Crouch End');
        expect(wrapper.find('td').at(1).text()).to.equal('low');
        expect(wrapper.find('td').at(2).text()).to.equal('medium');
        expect(wrapper.find('td').at(3).text()).to.equal('high');
        expect(wrapper.find('td').at(4).text()).to.equal('extreme');
    });
});