import { useDispatch } from "react-redux"
import { appendAnecdote } from "../reducers/anecdoteReducer"
import anecdoteService from "../services/anecdoteService"

const NewAnecdote = (content) => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = await anecdoteService.createNew(event.target.anecdote.value)
    event.target.anecdote.value = ''
    dispatch(appendAnecdote(content))
  }


  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default NewAnecdote