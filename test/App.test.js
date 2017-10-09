import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';


describe('User intergration test', () => {
  let renderedApp;

  it('should render Conrols, Compare and CardContainer components', () => {
    renderedApp = shallow(<App />);

    expect(renderedApp.find('Controls').length).toEqual(1);
    expect(renderedApp.find('Compare').length).toEqual(1);
    expect(renderedApp.find('CardContainer').length).toEqual(1);
  });

  it('Should load a dataSet by default to state', () => {
    renderedApp = shallow(<App />);
    const stateObjectData =  renderedApp.state().districts;

    expect(typeof stateObjectData).toBe('object');
    expect(stateObjectData).toMatchSnapshot();
  });

  it('Should render 181 cards for each district in Colorado by default', () => {
    renderedApp = mount(<App />);

    expect(renderedApp.find('Card').length).toEqual(181);
  });

  it('Should allow user to filter for specific distrcit using a serach', () => {
    const renderedApp = mount(<App />);
    // const stateObjectData =  renderedApp.state().districts;
    // const searchControl = renderedApp.find('Controls')
    // const searchInput = renderedApp.find('.search-input');
    const card = renderedApp.find('Card');

    expect(card.length).toEqual(181);

    // searchInput.simulate('change', { target: { value: 'aca' } });

    // console.log(searchInput.debug());

    // expect(card.length).toEqual(1);
  });
});
