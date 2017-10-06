import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardContainer from '../src/CardContainer';
import DistrictRepository from '../src/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('CardContainer', () => {
  const district = new DistrictRepository(kinderData);

  it('should create an instance of a card container', () => {
    const wrapper = shallow(<CardContainer
      firstDistrict={district.data.COLORADO}
      secondDistrict={district.data['ACADEMY 20']}
      setComparePosition={0}
      districtData={district.data}
      districtList={[]}
    />);

    expect(wrapper).toMatchSnapshot()
  });
});
