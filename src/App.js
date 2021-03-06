import React, { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({¬†handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const Display = ({ anecdotes, points,  i }) => {
  return (
    <div>
      {anecdotes[i]}
      <br></br>
      has {points[i]} votes
      <br></br>
    </div>
  )
}
 
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points , setPoints] = useState(new Uint8Array(7))

  const nextAnecdote = () => {
    const random =  Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const voteForAnecdote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  const mostVoted = () => {
    let best = 0
    for(let i = 1; i < points.length; i++) {
      if(points[i] > points[best]) best = i
    }
    return best
  }
 
  return (
    <div>
      <Header text='Anecdote of the day'/>
      <Display
        anecdotes={anecdotes}
        points={points}
        i={selected}
      />
      <Button handleClick={voteForAnecdote} text='vote'/>
      <Button handleClick={nextAnecdote} text='next anecdote'/>
      <Header text='Anecdote with most votes'/>
      <Display
        anecdotes={anecdotes}
        points={points}
        i={mostVoted()}
      />
    </div>
  )
}

export default App