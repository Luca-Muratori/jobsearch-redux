import { createSlice } from '@reduxjs/toolkit'

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    list: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    },
    removeFromFavourites: (state, action) => {
      return {
        ...state,
        list: state.list.filter(
          (companyName) => companyName !== action.payload
        ),
      }
    },
  },
})

// action creators
export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer
