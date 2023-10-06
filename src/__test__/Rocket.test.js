import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import IndividualRocket from '../Components/Rocket/IndividualRocket';
import store from '../Redux/store';

describe('Test for Rocket', () => {
  test('should render', () => {
    const rocket = {
      id: 1,
      rocketId: 'Rocket',
      image: 'image.png',
      name: 'Rocket',
      description: 'A test rocket',
      reserved: false,
    };
    const tree = renderer.create(
      <Provider store={store}>
        <IndividualRocket
          key={rocket.id}
          name={rocket.name}
          id={rocket.rocketId}
          description={rocket.description}
          image={rocket.image}
          reserved={rocket.reserved}
        />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
