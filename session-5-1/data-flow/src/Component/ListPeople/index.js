import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Paragraph() {
  return <p>Halo</p>
}

class ListPeople extends Component {
  constructor() {
    super()
    this.state = {
      name: 'G2 Academy',
      room: 12,
      is_bootcamp: true,
      session: {
        1: 'intro',
        2: 12,
        3: 'final'
      },
      people: [
        {
          id: 1,
          name: 'Obi Wan',
          status: 'Jedi'
        },
        {
          id: 2,
          name: 'Luke Skywalker',
          status: 'Padawan'
        },
        {
          id: 3,
          name: 'Qui Gon',
          status: 'Jedi Master'
        }
      ]
    }
  }

  myFunction = () => {
    console.log(this.state.name)
  }

  render() {
    const { people, ...restState } = this.state

    return (
      <People
        people={people}
        myFunction={this.myFunction}
        Paragraph={<Paragraph />}
        {...restState}
      />
    )
  }
}

function People({
  name,
  room,
  is_bootcamp,
  session,
  people,
  myFunction,
  Paragraph
}) {
  const onClick = name => {
    console.log(name)
    myFunction()
  }

  return (
    <>
      <p>name: {name}</p>
      <p>room: {room}</p>
      <p>is bootcamp: {is_bootcamp ? 'iya' : 'bukan'}</p>
      <p>session: {session[2]}</p>
      {Paragraph}
      <input type="text" placeholder="input nama jedi baru" />
      <button>Add Jedi</button>
      <ul>
        {people.map(x => (
          <li key={x.id} onClick={() => onClick(x.name)}>
            {x.name}
          </li>
        ))}
      </ul>
    </>
  )
}

People.propTypes = {
  name: PropTypes.oneOf(['G2 Academy', 'Academy']),
  room: PropTypes.number,
  is_bootcamp: PropTypes.bool,
  session: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  Paragraph: PropTypes.element,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  )
}

export default ListPeople
