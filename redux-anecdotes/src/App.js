import ListAnecdotes from './components/ListAnecdotes'
import NewAnecdote from './components/NewAnecdotes'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <NewAnecdote />
      <ListAnecdotes />
    </div>
  )
}

export default App