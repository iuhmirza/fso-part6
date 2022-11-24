import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const filterSplice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, action) {
      return action.payload
    }
  }
})

export const {updateFilter} = filterSplice.actions
export default filterSplice.reducer
