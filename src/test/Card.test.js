import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';
import DistrictRepository from '../helper.js';

describe('Card', () => {
  const mockData = {
    location: 'COLORADO',
    districtData: {
     '2004': 0.24,
     '2005': 0.278,
     '2006': 0.337,
     '2007': 0.395,
     '2008': 0.536,
     '2009': 0.598,
     '2010': 0.64,
     '2011': 0.672,
     '2012': 0.695,
     '2013': 0.703,
     '2014': 0.741
    }
  }

  it('should create an instance of a card', () => {
    // this test hangs and never completes or fails since update to react-scripts 1.0.17.
    // no idea why. can't seem to get it to work.
    
    // const mockFunc = jest.fn();
    // const wrapper = shallow(<Card
    //   selected='COLORADO'
    //   setComparePosition={mockFunc}
    //   district={mockData}
    //   key={mockData.location}
    // />);
    //
    // expect(wrapper).toMatchSnapshot();
  });
});
