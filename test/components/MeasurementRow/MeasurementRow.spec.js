import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import MeasurementRow from '../../../src/components/MeasurementRow/MeasurementRow'

describe('<MeasurementRow/>', () => {
    it('should be able to set properties', () => {
        const table = global.document.createElement('table');
        const tableBody = global.document.createElement('tbody');
        table.appendChild(tableBody);

        const measurement = {
            name: "Crouch End",
            no2: "Low",
            so2: "High",
            o3: "Very High",
            pm25: "Moderate"
        };

        const wrapper = mount(<MeasurementRow measurement={ measurement }/>, {
            'attachTo': tableBody
        });

        expect(wrapper.find('td').at(0).text()).to.equal('Crouch End');
        expect(wrapper.find('td').at(1).text()).to.equal('Low'); // no2
        expect(wrapper.find('td').at(2).text()).to.equal('Very High'); // o3
        expect(wrapper.find('td').at(3).text()).to.be.empty; // pm10
        expect(wrapper.find('td').at(4).text()).to.equal('Moderate'); // pm25
        expect(wrapper.find('td').at(5).text()).to.equal('High'); //so2

        expect(wrapper.find('td').at(1).hasClass('low')).to.be.true; // no2
        expect(wrapper.find('td').at(2).hasClass('very-high')).to.be.true; // o3
        expect(wrapper.find('td').at(3).hasClass()).to.be.false; // pm10
        expect(wrapper.find('td').at(4).hasClass('moderate')).to.be.true; // pm25
        expect(wrapper.find('td').at(5).hasClass('high')).to.be.true; //so2
    });
});