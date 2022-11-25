import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Filter from './components/Filter'
import ListAnecdotes from './components/ListAnecdotes'
import NewAnecdote from './components/NewAnecdotes'
import Notification from './components/Notification'
import { setAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdoteService'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])

  return (
    <div>
      <Filter />
      <Notification />
      <NewAnecdote />
      <ListAnecdotes />
    </div>
  )
}

export default App