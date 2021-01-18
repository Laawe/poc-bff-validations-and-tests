import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import App from '../App';

jest.mock('axios');

describe('Suite test - App.jsx', () => {
  it('Test calling to sendToServer function - correct values', () => {
    const response = {
      status: 200,
      message: 'ok',
      data: {},
    };
    axios.post.mockImplementation(() => Promise.resolve(response));
    const component = mount(<App />);
    const spy = jest.spyOn(component.instance(), 'sendToServer');
    component
    .find('#id')
    .simulate('change', { event: { target: { value: '15' } } });
    component
    .find('#name')
    .simulate('change', { event: { target: { value: 'Carmen' } } });
    component.find('.app_btn--submit').simulate('click');
    expect(spy).toHaveBeenCalled();
    axios.mockClear();
});
});
