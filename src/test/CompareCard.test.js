import React from 'react';
import { shallow } from 'enzyme';
import CompareCard from '../CompareCard';

describe('CompareCard', () => {

  it('should create an instance of a card', () => {
    const dummyCompare = {
      firstDistrict: {
        title: 'Colorado',
        average: .8,
        districtData: { districtData: { 2007: 1 } }
      },
      secondDistrict: {
        title: 'Turing',
        average: .9,
        districtData: { districtData: { 2007: 1 } }
      },
      difference: {
        compare: .85
      }
    };

    const wrapper = shallow(<CompareCard compareInfo={dummyCompare}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
