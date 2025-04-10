// import { MdKeyboardArrowRight } from "react-icons/md";
// import { MdArrowRightAlt } from "react-icons/md";


const Episodes = () => {
    // const fetchData = async()=>{
    //     const resp = await fetch('https://api.attackontitanapi.com/episodes/')
    //     const result = await resp.json()
    //     console.log(result.results[0])
    // }
    // useEffect(()=>{
    //     fetchData()
    // })
    const episodesData = [
        {img:'/ep1Img.png', ep:'S01 | EP01', title:'To You, in 2000 Years: The Fall of Shiganshina, Part 1'},
        {img:'/ep2Img.png', ep:'S01 | EP02', title:'That Day - The Fall of Shiganshina: Part 2'},
        {img:'/ep3Img.png', ep:'S01 | EP03', title:'A Dim Light Amid Despair - Humanitys Comeback: P1'},
        {img:'/ep4Img.png', ep:'S01 | EP04', title:'The Night of the Closing Ceremony: Humanitys..........'},
    ]
    return (
    <div className='h-dvh py-10'> {/* Parent Div */}
        
        {/* Start Watching text: Improvement required: Proper responsiveness! */}
        <div className='flex justify-center items-center gap-5'>
            <div className='border-t-1 border-white/50 w-[30vmax]'></div> {/* These should not touch the borders in responsive designs */}
            <h1 className='text-white font-bold text-[3vmax] uppercase text-center leading-none'>Start Watching</h1> {/* Heading */}
            <div className='border-t-1 border-white/50 w-[30vmax]'></div>
        </div>

        {/* First 5 episodes [Need to make responsive better! especially ep img part!] */}
        <div className='px-3 py-[4vmax]'>
            {episodesData.map((episode, idx)=>(
                <div key={idx} className='flex justify-between items-center my-4 text-white h-25 w-full bg-white/10 rounded-2xl p-[1vmax] py-[3vmax]'>
                    <div className="flex items-center">
                        {/* Episode image container */}
                        <div className='h-17 w-30 bg-zinc-400 rounded-[4px] mr-4 bg-cover overflow-hidden'>
                            <img src={episode.img} alt={episode.ep} />
                        </div>
                        <div>
                            <h2 className='font-bold text-2xl'>{episode.ep}</h2>
                            <p className='text-xl font-extralight leading-5'>{episode.title}</p>
                        </div>
                    </div>
                    {/* <span className="text-8xl"><MdKeyboardArrowRight /></span> */}
                </div>
            ))}
        </div>
        <div className='flex justify-center items-center text-white font-bold text-2xl'>
            <a className="uppercase">View All</a>
            {/* <MdArrowRightAlt /> */}
        </div>
    </div>
  )
}

export default Episodes