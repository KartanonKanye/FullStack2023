const Header = (props) => {
  return(
    <h1>{props.course_name}</h1>
  )
}
const Part = (props) => {
  return (
    <p> {props.part_name} {props.part_count}</p>
  )
}

const Content = (props) => {
  return(
    <div> 
      <Part part_name = {props.part1} part_count = {props.exercises1} />
      <Part part_name = {props.part2} part_count = {props.exercises2} />
      <Part part_name = {props.part3} part_count = {props.exercises3} />
    </div>
    
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
  const exercises1 = 22
  const part2 = 'Using props to pass data'
  const exercises2 = 9
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      < Header course_name= {course}/>
      < Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 ={exercises1} exercises2 ={exercises2} exercises3 ={exercises3} />
      < Total sum = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}


export default App;
