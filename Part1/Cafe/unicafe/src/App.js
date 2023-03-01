import { useState } from 'react'

//button component that takes the event handler and the name of the button
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

//component for a single line containing one statistic
const Statline = (props) =>{
  return(
    <div>
      {props.text} {props.value}
    </div>
  )
}

//statistic component to see the current amount of reviews
const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad
  const average = (props.good + (-1* props.bad))/total
  const positive = (props.good/total) * 100
  
  if(total == 0){
    return (
      <p> No feedback given </p>
    )
  }

  return (
    <div>
      <Statline text = "good" value = {props.good} />
      <Statline text = "neutral" value = {props.neutral} />
      <Statline text = "bad" value = {props.bad} />
      <Statline text = "all" value = {total} />
      <Statline text = "average" value = {average} />
      <Statline text = "positive" value = {positive} />

    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log("good is now at ", good)

  return (
    <div>
      <h1>give feedback </h1>
      <Button handleClick = {() => setGood(good + 1)} text = "good"/>
      <Button handleClick = {() => setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick = {() => setBad(bad + 1)} text = "bad"/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad  = {bad}/>
    </div>
  )
}

export default App;
