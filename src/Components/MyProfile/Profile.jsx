import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../Redux/missions/missions';
import classes from './Profile.module.css';

export default function Profile() {
  const rR = useSelector((state) => state.rocket.rocket.filter((rocket) => rocket.reserved));
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch, missions]);

  const myMission = missions.filter((mission) => mission.reserved === true);
  return (
    <div className={classes['profile-container']}>
      <div className={classes['mission-container']}>
        <h2 className="">My Missions</h2>
        <ul>
          {myMission.length ? (
            myMission.map((mission) => (
              <li className="" key={mission.id}>
                {mission.name}
              </li>
            ))
          ) : (
            <li className="">None</li>
          )}
        </ul>
      </div>

      <div className={classes['rocket-container']}>
        <h2>Rocket</h2>
        <ul>
          {rR.map((rocketName) => (
            <li key={Math.random()}>{rocketName.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
