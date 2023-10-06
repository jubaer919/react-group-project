import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../Components/Mission/Missions';
import store from '../Redux/store';

import { joinMission, leaveMission } from '../Redux/missions/missions';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type missions/joinMission', () => {
    const id = 1;
    const action = joinMission(id);
    expect(action.type).toBe('missions/joinMission');
  });

  it('should should return an action with type missions/leaveMission', () => {
    const id = 1;
    const action = leaveMission(id);
    expect(action.type).toBe('missions/leaveMission');
  });
});
