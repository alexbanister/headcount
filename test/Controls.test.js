import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from '../src/Controls';
import DistrictRepository from '../src/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('Controls', () => {
  const district = new DistrictRepository(kinderData);

  it('should create an instance of a card container', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Controls
      searchDistricts={mockFunc}
      fileList={Object.keys(district)}
      changeData={mockFunc}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should change state if user types into search field', () => {
    const mockFunc = jest.fn();
    const wrapper = mount(<Controls
      searchDistricts={mockFunc}
      fileList={Object.keys(district)}
      changeData={mockFunc}
    />);
    const searchInput = wrapper.find('.search-input');

    expect(wrapper.state().searchValue).toEqual('');
    searchInput.simulate('change', { target: { value: 'aca' } });
    expect(wrapper.state().searchValue).toEqual('aca');
  });
});
