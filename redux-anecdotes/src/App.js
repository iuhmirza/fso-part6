import Filter from './components/Filter'
import ListAnecdotes from './components/ListAnecdotes'
import NewAnecdote from './components/NewAnecdotes'
import Notification from './components/Notification'

const App = () => {
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