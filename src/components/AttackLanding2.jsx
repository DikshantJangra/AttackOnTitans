import { motion } from 'framer-motion'
import React from 'react'

const AttackLanding2 = () => {
  const images = [
    {imgLink: '/silver_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/black_wallRose.png', alt:'Wall Rose'},
    {imgLink: '/silver_wallMaria.png', alt:'Wall Maria'},
    {imgLink: '/black_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/silver_wallRose.png', alt:'Wall Rose'},
    {imgLink: '/black_wallMaria.png', alt:'Wall Maria'},
    {imgLink: '/silver_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/black_wallRose.png', alt:'Wall Rose'},
    {imgLink: '/silver_wallMaria.png', alt:'Wall Maria'},

    {imgLink: '/black_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/silver_wallRose.png', alt:'Wall Rose'},
    {imgLink: '/black_wallMaria.png', alt:'Wall Maria'},
    {imgLink: '/silver_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/black_wallRose.png', alt:'Wall Rose'},
    {imgLink: '/silver_wallMaria.png', alt:'Wall Maria'},
    {imgLink: '/silver_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/black_wallRose.png', alt:'Wall Rose'},
    {imgLink: '/silver_wallMaria.png', alt:'Wall Maria'},
  ]
  return (
    <>
        <div className='min-h-screen w-full '>
          <div className='whitespace-nowrap overflow-hidden'>
            {images.map((img, idx)=>(
              <motion.img
                key={idx}
                initial={{ x: 0 }}
                animate={{ x: '-300%' }}
                transition={{ 
                  ease: 'linear', 
                  duration: 20,
                  repeat: Infinity 
                }}
                className='h-[16vmax] w-auto inline m-0 p-0'
                src={img.imgLink}
                alt={img.alt}
              />
            ))}
          </div>

          <div className='flex justify-between items-center'>
          <img
            className='h-[45vmax] hidden sm:block'
            src="/foundingTitan6.png" 
            alt="Founding Titan 6"
           />
           <p className='flex justify-center w-screen pt-40 sm:pt-0 text-center bg-gradient-to-r from-[#a41201] to-[#000000] bg-clip-text text-transparent font-black text-[5vmax] tracking-tighter leading-none '>THE WALLS <br />
            PROTECTING <br />
            HUMANITY</p>
           <img
            className='h-[45vmax] hidden sm:block'
            src="/foundingTitan9.png" 
            alt="Founding Titan 9"
           />
          </div>
        </div>
    </>
  )
}

export default AttackLanding2