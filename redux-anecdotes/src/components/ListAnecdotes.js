import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, } from '../reducers/notificationReducer'


const ListAnecdotes = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = async (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`you voted "${anecdote.content}"`, 10))
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListAnecdotes