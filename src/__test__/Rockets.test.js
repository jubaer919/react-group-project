import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../Components/Rocket/Rockets';
import store from '../Redux/store';
import { rocketReserve, cancleReservation } from '../Redux/Rocket/rocketSlice';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type rocket/cancleReservation', () => {
    const data = [
      {
        id: 1,
        rocket_id: 'rock52',
        rocket_name: 'rock 52',
        rocket_type: 'rocket',
        flickr_images: ['image1.png', 'imag2.jpg'],
        description: 'A test rocket',
      },
    ];
    const action = cancleReservation(data);
    expect(action.type).toBe('rocket/cancleReservation');
  });

  it('should return an action with type rocket/rocketReserve', () => {
    const id = 1;
    const action = rocketReserve(id);
    expect(action.type).toBe('rocket/rocketReserve');
  });
});
