import React from 'react'
import AttackLanding from './components/AttackLanding'
import AttackLanding2 from './components/AttackLanding2'
import LoadingAttack from './components/LoadingAttack'
import LocomotiveScroll from 'locomotive-scroll'; // Not initialized yet
import CharactersAttack from './components/CharactersAttack';
import Episodes from './components/Episodes';
import Footer from './components/Footer';

const App = () => {
  const scroll = new LocomotiveScroll(); // Not initialized yet
  return (
    <div className=' w-full bg-gradient-to-b from-[#AF502C] to-[#A90003]'>
      <AttackLanding />
      <AttackLanding2 />
      {/* <CharactersAttack /> */}
      <Episodes />
      <Footer />
    </div>
  )
}

export default App