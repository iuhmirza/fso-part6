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

export const { updateNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer