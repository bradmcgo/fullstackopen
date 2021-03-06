import React from 'react'

const Header = (props) => {
  return(
  <h1>
    {props.course}
  </h1>
  )
}

const Content = (props) => {
  return(
  <div>
  <p>
    {props.part} {props.exercises}
      </p>
  <p>
    {props.part2} {props.exercises2}
      </p>
  <p>
  {props.part3} {props.exercises3}
      </p>
  </div>
  )
}

const Total = (props) => {
  return(
  <p>
    Number of exercises {props.exercisesSum}
  </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercises={exercise1} part2={part2} exercises2={exercise2} part3={part3} exercises3={exercise3}/>
      <Total exercisesSum={exercise1+exercise2+exercise3}/>
    </div>
  )
}

export default App