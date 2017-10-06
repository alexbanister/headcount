import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CompareCard from '../src/CompareCard';

describe('CompareCard', () => {

  it('should create an instance of a card', () => {
    const dummyCompare = {
      firstDistrict: {
        title: 'Colorado',
        average: .8
      },
      secondDistrict: {
        title: 'Turing',
        average: .9
      },
      difference: {
        compare: .85
      }
    };

    const wrapper = shallow(<CompareCard compareInfo={dummyCompare}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
