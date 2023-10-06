import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Profile from '../Components/MyProfile/Profile';
import store from '../Redux/store';

describe('Test for Rockets', () => {
  test('should render', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
