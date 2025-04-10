import React from 'react'

const Footer = () => {
  return (
    <> {/* Parent Div  */}
        <div className='relative grid sm:grid-cols-2 h-[33vmax]'>

            {/* Column 1 - Background image */}
            <div className='h-full bg-[url(/footerImg.png)] bg-cover bg-right hidden sm:block'></div>

            {/* Column 2 - Right side content */}
            <div className='flex flex-col justify-between h-full text-white sm:pr-15'>
                <div> {/* Parent Div container for top content */}
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
                {/* Bottom content */}
                <div className='text-center py-2'>
                    <p className='py-1'>Privacy Policy | Terms of Service | Cookie Policy</p>
                    <p className='font-bold text-sm'>© 2025 Attack on Titan. All rights reserved.</p>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Footer