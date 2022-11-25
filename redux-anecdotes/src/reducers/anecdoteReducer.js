import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from '../services/anecdoteService'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    incrementAnecdote(state, action) {
      const id = action.payload
      const anecdote = state.find(anecdote => anecdote.id === id)
      const votedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      return state = state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    anecdoteService.addVote(anecdote)
    dispatch(incrementAnecdote(anecdote.id))
  }
}

export const { incrementAnecdote, setAnecdotes, appendAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer