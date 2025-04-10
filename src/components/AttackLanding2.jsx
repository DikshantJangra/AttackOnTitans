import React from 'react'

const AttackLanding2 = () => {
  const images = [
    {imgLink: '/silver_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/black_wallRose.png', alt:'Wall Sina'},
    {imgLink: '/silver_wallMaria.png', alt:'Wall Sina'},
    {imgLink: '/black_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/silver_wallRose.png', alt:'Wall Sina'},
    {imgLink: '/black_wallMaria.png', alt:'Wall Sina'},
    {imgLink: '/silver_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/black_wallRose.png', alt:'Wall Sina'},
    {imgLink: '/silver_wallMaria.png', alt:'Wall Sina'},
    {imgLink: '/black_wallSina.png', alt:'Wall Sina'},
    {imgLink: '/silver_wallRose.png', alt:'Wall Sina'},
    {imgLink: '/black_wallMaria.png', alt:'Wall Sina'},

  ]
  return (
    <>
        <div className='h-screen w-full '>
          <div className='whitespace-nowrap overflow-hidden'>
            {images.map((img, idx)=>(
              <img  key={idx}
              className='h-[16vmax] w-auto inline m-0 p-0'
              src={img.imgLink} alt={img.alt}
            />
            ))}
          </div>

          <div className='flex justify-between items-center'>
          <img
            className='h-[45vmax] hidden sm:block'
            src="/foundingTitan6.png" 
            alt="Founding Titan 6"
           />
           <p className='flex justify-center w-screen pt-40 sm:pt-0 text-center text-white font-bold text-[5vmax] tracking-tighter leading-none '>THE WALLS <br />
            PROTECTING <br />
            HUMAITY</p>
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