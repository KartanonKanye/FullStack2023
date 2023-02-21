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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      < Header course_name= {course}/>
      < Content part1 = {part1.name} part2 = {part2.name} part3 = {part3.name} exercises1 ={part1.exercises} exercises2 ={part2.exercises} exercises3 ={part3.exercises} />
      < Total sum = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}


export default App;
