import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const CharactersAttack = () => {
    const eyes1 = useRef(null)
    const eyes2 = useRef(null)
    const eyes3 = useRef(null)
    const eyes4 = useRef(null)
    const eyes5 = useRef(null)
    const eyes6 = useRef(null)
    const cardRight1 = useRef(null)
    const cardRight2 = useRef(null)
    const cardLeft1 = useRef(null)
    const cardLeft2 = useRef(null)
    const viewAll = useRef(null)
    useEffect(()=>{
        gsap.fromTo(
            eyes1.current,
            {opacity:0, x:-100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:eyes1.current,
                    start:'top 80%'
                }
            }
        )
        gsap.fromTo(
            eyes2.current,
            {opacity:0, x:-100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:eyes2.current,
                    start:'top 80%'
                }
            }
        )
        gsap.fromTo(
            eyes3.current,
            {opacity:0, x:-100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:eyes3.current,
                    start:'top 80%'
                }
            }
        )
        gsap.fromTo(
            eyes4.current,
            {opacity:0, x:100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:eyes4.current,
                    start:'top 80%'
                }
            }
        )
        gsap.fromTo(
            eyes5.current,
            {opacity:0, x:100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:eyes5.current,
                    start:'top 80%'
                }
            }
        )
        gsap.fromTo(
            eyes6.current,
            {opacity:0, x:100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:eyes6.current,
                    start:'top 80%'
                }
            }
        )

        gsap.fromTo(
            cardRight1.current,
            {opacity:0, x:100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:cardRight1.current,
                    start:'top 80%'
                }
            }
        )
        gsap.fromTo(
            cardRight2.current,
            {opacity:0, x:100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:cardRight2.current,
                    start:'top 80%'
                }
            }
        )
        gsap.fromTo(
            cardLeft1.current,
            {opacity:0, x:-100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:cardLeft1.current,
                    start:'top 80%'
                }
            }
        )
        gsap.fromTo(
            cardLeft2.current,
            {opacity:0, x:-100},
            {
                opacity:1,
                x:0,
                duration:1,
                scrollTrigger:{
                    trigger:cardLeft2.current,
                    start:'top 80%'
                }
            }
        )
        gsap.fromTo(
            viewAll.current,
            {opacity:0, x:100},
            {
                opacity:1,
                x:0,
                duration:0.6,
                scrollTrigger:{
                    trigger:viewAll.current,
                    start:'top 80%'
                }
            }
        )
    },[])
  return (
    <>
        {/* Parent Container */}
        <div className='h-full font-Popings overflow-hidden'>
            {/* Heading */}
            <h2 className='text-[5vmax] px-9 text-white text-center sm:text-left font-bold tracking-tight leading-none'>
                Not just characters, <br /> but emotions
            </h2>

            {/* Top Eye and card container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 py-15'>
                <div className='w-160 justify-self-start sm:block hidden'> {/* Eye Container */}
                    <img ref={eyes1} src="/erenKidoEye.png" alt="Eye" />
                    <img ref={eyes2} src="/erenKidoEye2.png" alt="Eye" />
                    <img ref={eyes3} src="/erenKidoEye3.png" alt="Eye" />
                </div>

                <div className='flex sm:flex-row flex-col items-center gap-0 sm:gap-20 cards'> {/* Cards container */}
                    <div ref={cardRight1} className='card h-100 bg-white/10 w-70 rounded-2xl text-white cursor-pointer overflow-hidden hover:scale-110 transition-all duration-300'> {/* Card 1 */}
                        <div className='h-70 bg-cover bg-center bg-[url(/erenCard.png)]'></div>
                        <div className='px-2 text-center'>
                            <h1 className='font-semibold text-3xl pt-2 leading-none'>Eren Yeager</h1>
                            <p className='text-white/50 leading-none'>"The rage-fueled avenger of freedom."</p>
                            
                            <p className='pt-5 text-black/50 text-xs'>Click to know more</p>
                        </div>
                    </div>


                    <div ref={cardRight2} className='card h-100 bg-white/10 w-70 rounded-2xl text-white cursor-pointer mt-10 sm:mt-60 overflow-hidden'> {/* Card 2 */}
                        <div className='h-70 bg-cover bg-center bg-[url(/MikasaCard.png)]'></div>
                        <div className='px-2 text-center'>
                            <h1 className='font-semibold text-3xl pt-2 leading-none'>Mikasa</h1>
                            <p className='text-white/50 leading-none'>"Unbreakable blade, undying loyalty."</p>
                            
                            <p className='pt-5 text-black/50 text-xs'>Click to know more</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom eye and card container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 pb-15'>
                <div className='flex sm:flex-row flex-col items-center gap-0 sm:gap-20 cards'> {/* Card 3 */}
                    <div ref={cardLeft1} className='card h-100 bg-white/10 w-70 rounded-2xl text-white cursor-pointer overflow-hidden'>
                        <div className='h-70 bg-cover bg-center bg-[url(/LeviCard.png)]'></div>
                        <div className='px-2 text-center'>
                            <h1 className='font-semibold text-3xl pt-2 leading-none'>Levi Ackerman</h1>
                            <p className='text-white/50 leading-none'>"Humanity’s strongest soldier, death in a spin."</p>
                            
                            <p className='pt-5 text-black/50 text-xs'>Click to know more</p>
                        </div>
                    </div>


                    <div ref={cardLeft2} className='card h-100 bg-white/10 w-70 rounded-2xl text-white cursor-pointer mt-10 sm:mt-60 overflow-hidden'> {/* Card 4 */}
                        <div className='h-70 bg-cover bg-center bg-[url(/ArminCard.png)]'></div>
                        <div className='px-2 text-center'>
                            <h1 className='font-semibold text-3xl pt-2 leading-none'>Armin</h1>
                            <p className='text-white/50 leading-none'>"The mastermind behind impossible victories."</p>
                            
                            <p className='pt-5 text-black/50 text-xs'>Click to know more</p>
                        </div>
                    </div>
                </div>
                
                {/* Conatiner 2 eyes */}
                <div className='w-160 justify-self-end sm:block hidden'>
                    <img ref={eyes4} src="/erenTeenEye.png" alt="Eye" />
                    <img ref={eyes5} src="/erenTeenEye2.png" alt="Eye" />
                    <img ref={eyes6} src="/erenTeenEye3.png" alt="Eye" />
                </div>
            </div>

            {/* View All Characters section! */}
            <div className="w-full mt-20 h-[300px] bg-zinc-200 bg-[url('/ErenViewMore.png')] bg-cover bg-center text-white 
    flex items-center justify-center text-3xl font-bold transform -skew-y-7 origin-top-left">
  <Link to={'/AllCharacters'} ref={viewAll}>View All Characters</Link>
</div>

        </div>
    </>
  )
}

export default CharactersAttack
