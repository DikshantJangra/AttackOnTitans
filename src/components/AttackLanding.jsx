import React from 'react'

const AttackLanding = () => {
  return (
  <>
    <div className='h-screen w-full bg-[url(./src/assets/OGbg.png)] bg-[#CB6734] bg-cover bg-center bg-no-repeat'>
        <div className='Navbar font-black text-white flex justify-center items-center text-[5vmax] py-3'>
            <h1 className='uppercase'>Attack</h1>
            <img className='h-[8vmax] px-2' src="./src/assets/ScoutRegiment.png" alt="ScoutRegiment" />
            <h1 className='uppercase'>Titan</h1>
        </div>

        <div className='text-center sm:text-left tracking-tighter pt-22 sm:px-10'>
            <h2 className='text-black sm:text-[#481D27] font-black text-[4vmax] '>FIGHT THE TITANS</h2>
            <p className='text-white font-extralight sm:font-light sm:text-[1.2vmax] px-9 sm:px-0 sm:w-130'>The world is surrounded by giant walls. Inside these walls, humanity survives, but the Titans loom ever larger.
            Eren Yeager, driven by the desire for freedom, is on a mission to break the chains of humanity’s greatest enemy—the Titans.</p>

            <button className='uppercase font-medium px-4 py-3 bg-[#313131] text-sm rounded-2xl text-white mt-4'>Join the fight</button>
        </div>
    </div>
  </>
  )
}

export default AttackLanding