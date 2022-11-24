import { createSlice } from "@reduxjs/toolkit";

const initialState = 'Nope there\'s only trash here.'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateNotification(state, action) {
      const content = action.payload
      state = content
    }
  },
})

export const { createNote } = notificationSlice.actions
export default notificationSlice.reducer