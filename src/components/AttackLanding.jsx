import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const AttackLanding = () => {
  const attackRef = useRef(null)
  const titanRef = useRef(null)
  const scoutRegRef = useRef(null)
  const contentRef1 = useRef(null)
  const contentRef2 = useRef(null)
  const contentRef3 = useRef(null)
  const btnRef = useRef(null)
  useEffect(()=>{
    const tl = gsap.timeline()
    tl.fromTo(
      scoutRegRef.current,
      {opacity:0},
      {opacity:1, duration:.5, ease:"power1.inOut", delay:5}
    )
    .add(()=>{
        gsap.fromTo(
          attackRef.current,
          { x: 300, opacity: 0 }, // From
          { x: 0, opacity: 1, duration: 1.2, ease: "power1.inOut" } // To
        )
        gsap.fromTo(
          titanRef.current,
          {x:-300, opacity:0},
          {x:0, opacity:1, duration:1.2, ease:"power1.inOut"}
        );
      })
    .add(()=>{
      tl.fromTo(
        contentRef1.current,
        {x:-300, opacity:0},
        {x:0, opacity:1, duration:0.4, ease:"power1.inOut"}
      )
      .fromTo(
        contentRef2.current,
        {x:-300, opacity:0},
        {x:0, opacity:0.7, duration:0.3, ease:"power1.inOut"}
      )
      .fromTo(
        contentRef3.current,
        {x:-300, opacity:0},
        {x:0, opacity:1, duration:0.1,ease:"power1.inOut"}
      )
      .fromTo(
        btnRef.current,
        {x:-300, opacity:0},
        {x:0, opacity:1, duration:0.1, ease:"power1.inOut"}
      )
    })
  },[])
  return (
  <>
    <div data-scroll data-scroll-speed='-0.05' className='min-h-screen w-full bg-[url(/OGbg.png)] bg-[#CB6734] bg-cover bg-center bg-no-repeat'>
        <div className='Navbar font-black text-white flex justify-center items-center text-[5vmax] py-3'>
            <div className='overflow-hidden'>
              <h1 ref={attackRef} className='uppercase opacity-0 animate-from'>Attack</h1>
            </div>
            <div className='overflow-hidden'>
              <img ref={scoutRegRef} className='h-[8vmax] px-2' src="/ScoutRegiment.png" alt="Scout Regiment" />
            </div>
            <div className='overflow-hidden'>
              <h1 ref={titanRef} className='uppercase opacity-0'>Titan</h1>
            </div>
        </div>

        <div className='text-center sm:text-left tracking-tighter pt-22 sm:px-10 overflow-hidden'>
            <h2 ref={contentRef1} className='text-black sm:text-[#481D27] font-black text-[4vmax] opacity-0'>FIGHT THE TITANS</h2>
            <p ref={contentRef2} className='text-white font-extralight sm:font-light sm:text-[1.2vmax] px-9 sm:px-0 sm:w-130 opacity-0'>The world is surrounded by giant walls. Inside these walls, humanity survives, but the Titans loom ever larger.
            Eren Yeager, driven by the desire for freedom, is on a mission to break the chains of humanity’s greatest enemy—the Titans.</p>

            <button ref={btnRef} className='uppercase opacity-0 font-medium cursor-pointer hover:bg-[#252525] hover:text-white px-4 py-3 bg-[#313131] text-sm rounded-2xl text-zinc-400 mt-4 transition-all duration-300'>Join the fight</button>
        </div>
    </div>
  </>
  )
}

export default AttackLanding