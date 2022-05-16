import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getResults = createAsyncThunk(
  'results/getResults',
  async (query, thunkAPI) => {
    try {
      const response = await fetch(
        'https://strive-jobs-api.herokuapp.com/jobs?search=' + query
      )
      if (response.ok) {
        let { data } = await response.json()
        return data
      } else {
        return thunkAPI.rejectWithValue()
      }
    } catch (error) {
      return thunkAPI.rejectWithValue()
    }
  }
)

const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    jobs: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getResults.pending]: (state) => {
      return {
        ...state,
        loading: true,
      }
    },
    [getResults.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      }
    },
    [getResults.rejected]: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      }
    },
  },
})

export default resultsSlice.reducer
