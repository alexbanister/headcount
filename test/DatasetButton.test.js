import React from 'react';
import { shallow } from 'enzyme';
import DatasetButton from '../src/DatasetButton';
import DistrictRepository from '../src/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('DatasetButton', () => {
  const district = new DistrictRepository(kinderData);

  it('should create an instance of a card container', () => {
    const wrapper = shallow(<DatasetButton
      key={district.districtData.COLORADO.location}
      dataSet={district.districtData.COLORADO.location}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
