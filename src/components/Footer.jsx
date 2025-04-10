import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='relative grid sm:grid-cols-2 h-[33vmax]'>
            <div className='h-full bg-[url(/footerImg.png)] bg-cover bg-right hidden sm:block'>
            </div>
            <div className='flex flex-col justify-between h-full text-white sm:pr-15'>
                <div>
                    <h1 className='uppercase font-bold text-[5vmax] text-center sm:text-left leading-none'>Attack On Titan</h1>
                    <div className='sm:flex justify-between text-center sm:text-left pt-7'>
                        <ul className='text-lg flex justify-center sm:block gap-3'>
                            <p>Home</p>
                            <p>Episodes</p>
                            <p>Characters</p>
                            <p>Community</p>
                            <p>Shop</p>
                        </ul>
                        <ul>
                            <li className='font-bold'>attackontitan@aot.com</li>
                        </ul>
                    </div>
                </div>
                <div className='text-center py-2'>
                    <p className='py-1'>Privacy Policy | Terms of Service | Cookie Policy</p>
                    <p className='font-bold text-sm'>© 2025 Attack on Titan. All rights reserved.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer