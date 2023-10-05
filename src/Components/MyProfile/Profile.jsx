import { useSelector } from 'react-redux';
import classes from './Profile.module.css';

export default function Profile() {
  const rR = useSelector((state) => state.rocket.rocket.filter((rocket) => rocket.reserved));

  return (
    <div className={classes['profile-container']}>
      <div className={classes['mission-container']}>
        <h1>Mission</h1>
      </div>
      <div className={classes['rocket-container']}>
        <h1>Rocket</h1>
        <ul>
          {rR.map((rocketName) => (
            <li key={Math.random()}>{rocketName.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
