import { connect } from "react-redux"
import { updateFilter } from "../reducers/filterReducer"

const Filter = (props) => {

  const handleChange = (event) => {
    props.updateFilter(event.target.value)
    // input-field value is in variable event.target.value
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  updateFilter
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter