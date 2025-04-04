import React from 'react'

const Loader = () => {
  return (
    <>
        <img
        className='absolute bottom-5 left-2/7 h-[15vmax] w-auto'
        src='./src/assets/concreateAOT.png'
        alt='AOT'
      />
      <p className='absolute left-4/10 bottom-40 text-5xl text-red-500 font-black font-Stick'>getting ready for,</p>
      <h2 className='absolute left-4/10 bottom-24 text-6xl text-white font-black uppercase font-Stick'>Attacking the Titans</h2>
    </>
  )
}

export default Loader