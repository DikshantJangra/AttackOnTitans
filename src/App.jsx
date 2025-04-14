import React, { useEffect, useState } from 'react'
import AttackLanding from './components/AttackLanding'
import AttackLanding2 from './components/AttackLanding2'
import LoadingAttack from './components/LoadingAttack'
import LocomotiveScroll from 'locomotive-scroll'; // Not initialized yet
import CharactersAttack from './components/CharactersAttack';
import Episodes from './components/Episodes';
import Footer from './components/Footer';

const App = () => {
  const scroll = new LocomotiveScroll(); // Not initialized yet
  const [loading, setLoading] = useState(true)
  const [isExiting, setisExiting] = useState(false)
  useEffect(()=>{

    const load = setTimeout(()=>{
      setLoading(false)
    },5000)
    const fade = setTimeout(()=>{
      setisExiting(true);
    },4600)
    
    return ()=>{
      clearTimeout(load)
    }
  })
  return (
    <div className=' w-full bg-gradient-to-b from-[#AF502C] to-[#A90003]'>
      {loading && <LoadingAttack exit={isExiting} />}
      <AttackLanding />
      <AttackLanding2 />
      <CharactersAttack />
      <Episodes />
      <Footer />
    </div>
  )
}

export default App