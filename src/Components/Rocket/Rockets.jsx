import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import IndividualRocket from './IndividualRocket';
import { fetchRocketInfo } from '../../Redux/Rocket/rocketSlice';

export default function Rockets() {
  const dispatch = useDispatch();
  const Rockets = useSelector((state) => state.rocket.rocket);
  useEffect(() => {
    if (!Rockets.length) {
      dispatch(fetchRocketInfo());
    }
  }, [dispatch, Rockets]);

  return (
    <div>
      {Rockets.map((r) => (
        // eslint-disable-next-line max-len
        <IndividualRocket key={r.id} id={r.id} des={r.des} name={r.name} img={r.img} re={r.reserved} />
      ))}
    </div>
  );
}
