import { useState } from 'react'
import VotingItem from '../src/components/Voting/VotingItem.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const handleVote = (voteValue) => {
    console.log(voteValue);
  };

  const votingList = [
    {
      title: 'Cats',
      description: '🐱',
    },
    {
      title: 'DOGS',
      description: '🐶',
    },]


  return (
    <>
      <VotingItem title={votingList[0].title} description={votingList[0].description} onVote={handleVote} />
    </>
  )
}

export default App
