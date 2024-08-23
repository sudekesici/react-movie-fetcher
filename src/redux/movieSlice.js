import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.sampleapis.com/movies';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies', 
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${category}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  category: 'classic',
  cards: [],
  status: 'idle',
  error: null,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    handleCategoryChange: (state, action) => {
      state.category = action.payload;
    }, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cards = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { handleCategoryChange } = movieSlice.actions;
export default movieSlice.reducer;
