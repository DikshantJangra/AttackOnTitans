import React from 'react'

const LoadingAttack = () => {
  return (
    <>
        <div className='fixed -top-7 left-0 h-full w-full cursor-none pointer-events-none bg-black'>
            <video
            className='absolute -z-10 h-full w-full object-cover opacity-75'
            autoPlay loop muted
            src='./src/assets/loading2.mp4' />
            {/* <div className='h-screen flex justify-center items-center'>
                <button className='p-5 rounded-xl opacity-75 hover:opacity-100  font-black bg-[#AB341F] text-white text-2xl uppercase'>Attack on Titans</button>
            </div> */}
            <div className="counter fixed -bottom-250 right-10 flex font-bold text-[5vmax] text-white custon-clip">
                <div className="counter1 relative -top-7">
                    <div className="num">0</div>
                    <div className="num offset">1</div>
                </div>
                <div className="counter2 relative -top-7">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                </div>
                <div className="counter3 relative -top-7">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                </div>
                <div className="counter4 relative -top-7">
                    <div>%</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoadingAttack