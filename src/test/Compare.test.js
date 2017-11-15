import React from 'react';
import { shallow } from 'enzyme';
import Compare from '../Compare';

describe('Compare', () => {

  it('should create an instance of a compare container', () => {
    const wrapper = shallow(<Compare
      compareInfo={{}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
