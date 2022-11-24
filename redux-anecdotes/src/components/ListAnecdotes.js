import { useSelector, useDispatch } from 'react-redux'
import { incrementAnecdote } from '../reducers/anecdoteReducer'
import { removeNotification, updateNotification } from '../reducers/notificationReducer'


const ListAnecdotes = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(incrementAnecdote(id))
    dispatch(updateNotification(`you voted "${anecdotes.find(anecdote => anecdote.id === id).content}"`))
    setTimeout(() => {
      dispatch(removeNotification(id))
    }, 5000)
  }

  const anecdotesToShow = filter ? anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  : anecdotes

  return (
    <div>
      <h2>Anecdotes</h2>
      {[...anecdotesToShow].sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListAnecdotes