const Header = (props) => {
  return(
    <h1>{props.course_name}</h1>
  )
}

const Content = (props) => {
  return(
    <p>{props.part_name} {props.part_count} </p>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises {props.sum} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 9
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      < Header course_name= {course}/>
      < Content part_name = {part1} part_count = {exercises1} />
      < Content part_name = {part2} part_count = {exercises2} />
      < Content part_name = {part3} part_count = {exercises3} />
      < Total sum = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}


export default App;
