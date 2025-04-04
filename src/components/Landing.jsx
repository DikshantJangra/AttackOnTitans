import React from 'react'
import Loader from './Loader';

const Landing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Loader />
      <video
        className="absolute z-[-1] inset-0 w-full h-dvh object-cover object-center opacity-85"
        autoPlay loop muted
      >
        <source
        // src="/public/eren4k.mp4"
          src='./src/assets/aotCompVid.mp4'
          type="video/mp4"
        />
      </video>
      

      {/* <div className='pt-40 px-10 w-[40vmax]'>
        <h1 className='text-7xl font-black'>EREN YEAGER</h1>
        <p>The world is surrounded by giant walls. Inside these walls, humanity survives, but the Titans loom ever larger.</p>
        <p>Eren Yeager, driven by the desire for freedom, is on a mission to break the chains of humanity’s greatest enemy—the Titans.</p>

        <button>Join the Fight</button>
      </div>
      <div className='absolute bottom-5 right-5 text-7xl text-white font-black'>
        <p className='uppercase'># Founding Titan</p>
      </div> */}
    </div>
  );
};

export default Landing;
