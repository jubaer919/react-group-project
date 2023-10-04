import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rocket/rocketSlice';
import missionReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
