import React from 'react'
import AttackLanding from './components/AttackLanding'
import AttackLanding2 from './components/AttackLanding2'
import LoadingAttack from './components/LoadingAttack'

const App = () => {
  return (
    <div className='h-screen w-full'>
      <AttackLanding />
      <AttackLanding2 />
    </div>
  )
}

export default App