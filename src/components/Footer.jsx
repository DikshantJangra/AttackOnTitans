import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='relative grid grid-cols-2'>
            <div className='h-full'>
                <img src="./src/assets/footerImg.png" alt="AOT team" />
            </div>
            <div className='h-full text-white text-right pr-7'>
                <h1 className='uppercase font-bold text-[5vmax]'>Attack On Titan</h1>
                <div className='text-left pl-24'>
                    <ul>
                        <li>Home</li>
                        <li>Episodes</li>
                        <li>Characters</li>
                        <li>Community</li>
                        <li>Shop</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer