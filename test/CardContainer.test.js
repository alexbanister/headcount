import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from '../src/CardContainer';
import DistrictRepository from '../src/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('CardContainer', () => {
  const district = new DistrictRepository(kinderData);

  it('should create an instance of a card container', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<CardContainer
      firstDistrict={'COLORADO'}
      secondDistrict={'ACADEMY 20'}
      setComparePosition={mockFunc}
      districtData={district.data}
      districtList={[]}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
