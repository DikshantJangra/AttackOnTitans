import React, { useEffect, useState } from 'react'

const LoadingAttack = ({exit}) => {
  const [count, setCount] = useState(0);
  const taglines = [
    "When humanity is cornered, monsters are born.  ~ AOT",
    "The world is cruel. And also… beautiful.  ~ Mikasa Ackerman",
    "What does it mean to be free?  ~ Eren Yeager",
    "This is the story of humanity's last hope... behind the walls.  ~ AOT",
    "This is the story of a boy who sought freedom... but found a war that consumed him. ~AOT",
    "What does it mean to be free?  ~Eren Yeager"
  ]
  const [currentTagline, setCurrentTagline] = useState(taglines[0])
  
  
  
  useEffect(() => {
    let start = 0;
    const end = 101;

    const animate = ()=>{
      const increment = (end -start)/(2000/16)
      start += increment
      setCount(Math.min(Math.floor(start),end))

      start !== end && requestAnimationFrame(animate)
    }
    animate()

    let index =0;
    const changeTaglines = setInterval(()=>{
      index = (index +1) % taglines.length
      setCurrentTagline(taglines[index])
    },1000)
    
    // Lock scroll on mount (html and body)
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    console.log('Locked')
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
}, []);

    
    
  return (
    <div className={`transition-opacity duration-1000 ${exit ? "opacity-0" : "opacity-100"} fixed z-999 inset-0 bg-black font-Popings`}>
      <video 
        className='absolute inset-0 w-full h-full object-cover'
        autoPlay 
        muted 
        loop
        src="/loading2.mp4"
      >
      </video>
        <p className='absolute w-full text-white top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-black text-[5vmax] leading-none text-center uppercase'>Attack on Titan</p>
        <i className='absolute w-full text-white top-1/3 pb-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[1.2vmax] font-extralight animate-pulse transition-opacity text-center'>{currentTagline}</i>
        <p className='absolute text-[#6b1717] font-black text-[8vmax] bottom-10 right-10'>{count}%</p>
    </div>
  )
}

export default LoadingAttack