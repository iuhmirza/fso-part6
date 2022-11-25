import { createSlice } from "@reduxjs/toolkit";

const initialState = 'Nope there\'s only trash here.'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateNotification(state, action) {
      const content = action.payload
      return content
    },
    removeNotification(state, action) {
      return null
    }
  },
})

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(updateNotification(content))
    setTimeout(() => {
      dispatch(removeNotification(null))
    }, time*1000)
  }
}

export const { updateNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer