import React from 'react'
import AttackLanding from './components/AttackLanding'
import AttackLanding2 from './components/AttackLanding2'
import LoadingAttack from './components/LoadingAttack'
import LocomotiveScroll from 'locomotive-scroll'; // Not initialized yet
import CharactersAttack from './components/CharactersAttack';

const App = () => {
  const scroll = new LocomotiveScroll(); // Not initialized yet
  return (
    <div className='h-screen w-full'>
      <AttackLanding />
      <AttackLanding2 />
      <CharactersAttack />
    </div>
  )
}

export default App