import React from 'react'
import { connect } from 'react-redux'
import { addtodo } from './action'

/*
  CONTOH STATE TODO
  todo = [
    {
      id: 1,
      name: 'makan'
    },
    {
      id: 2,
      name: 'tidur'
    },
    {
      id: 3,
      name: 'koding'
    }
  ]

  DISPATCH addtodo
  action.payload = {
    id: ...,
    name: ...
  }
*/

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmitTodo = this.onSubmitTodo.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmitTodo() {
    const { todo, add } = this.props
    const id = todo.length === 0 ? 1 : todo[todo.length - 1].id + 1
    add({
      id,
      name: this.state.value
    })
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state
    const { todo } = this.props
    return (
      <div>
        <input
          type="text"
          name="value"
          placeholder="what are you going to do?"
          onChange={this.onChange}
          value={value}
        />
        <button onClick={this.onSubmitTodo}>Add Todo</button>
        <ol>
          {todo.map(x => (
            <li key={x.id}>{x.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todo: state.todo
})

const mapDispatchToProps = dispatch => ({
  add: payload => dispatch(addtodo(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
