import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../slices/favourites/favouritesSlice'
import resultsReducer from '../slices/results/resultsSlice'

export default configureStore({
  reducer: {
    favourites: favouritesReducer,
    results: resultsReducer,
  },
})
