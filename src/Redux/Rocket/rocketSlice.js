import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rocket: [],
  status: 'good',
  error: null,
};

const baseURL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRocketInfo = createAsyncThunk('rockets/fetchrocketInfo', async () => {
  const response = await axios.get(baseURL);
  // eslint-disable-next-line no-console
  console.log(response.data);
  return response.data;
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketInfo.pending, (state) => {
        state.status = 'Rocket info is showing up';
      })
      .addCase(fetchRocketInfo.fulfilled, (state, action) => {
        state.status = 'Rocket info Successfull';
        state.rocket = action.payload.map((rocket) => (
          {
            id: rocket.id,
            name: rocket.name,
            des: rocket.description,
            img: rocket.flickr_images[0],
          }
        ));
        // eslint-disable-next-line no-console
        console.log(state.rocket);
      })
      .addCase(fetchRocketInfo.rejected, (state, action) => {
        state.status = 'Rocket info rejected';
        state.error = action.error.message;
      });
  },
});

export const allRocketsInfo = (state) => state.rocket;
export default rocketSlice.reducer;