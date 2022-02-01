import React from 'react'

const Header = (props) => {
  return(
  <h1>
    {props.course}
  </h1>
  )
}

const Part = (props) => {
  return (
  <div>
    {props.part} {props.exercises}
    </div>
  )
}

const Content = (props) => {
  return(
  <div>
    <Part part={'Fundamentals of React'} exercises={10}/>
    <Part part={'Using props to pass data'} exercises={7}/>
    <Part part={'State of a component'} exercises={14}/>
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
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total exercisesSum={exercise1+exercise2+exercise3}/>
    </div>
  )
}

export default App