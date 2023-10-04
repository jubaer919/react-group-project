import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/';
const MISSIONS_URL = `${BASE_URL}missions`;

const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(MISSIONS_URL);
  return response.data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission(state, action) {
      return state.map((mission) => (
        mission.id === action.payload ? { ...mission, reserved: true } : mission
      ));
    },
    leaveMission(state, action) {
      return state.map((mission) => (
        mission.id === action.payload
          ? { ...mission, reserved: false }
          : mission
      ));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export { fetchMissions };
export default missionsSlice.reducer;
