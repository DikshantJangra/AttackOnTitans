import { tr } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AllEpisodes = () => {
    const [epData, setEpData] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedSeason, setSelectedSeason] = useState('1');
     const fetchData = async()=>{
        try{
            setLoading(true)
            const resp = await fetch(`https://api.attackontitanapi.com/episodes/?page=${selectedSeason}`);
            if(!resp.ok){
                throw new Error('Network Error')
            }
            const result = await resp.json()
            console.log('fetched!')
            console.log(result)
            setEpData(result.results)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }
    const handleSeasonChange = (event) => {
        setSelectedSeason(event.target.value);
        // fetchData(); // Fetch new data based on the selected season
    };

    // const EpisodesData = Object.entries(epData.map((item, index)=>({
    //     id:item,
    //     name:index
    // })))
    // console.log(EpisodesData)
    useEffect(()=>{
        fetchData()
    }, [selectedSeason])
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#AF502C] to-[#A90003] py-10 font-Popings'>
        <div className='flex justify-center items-center gap-5'>
            <div className='border-t-1 border-white/50 w-[30vmax]'></div> {/* These should not touch the borders in responsive designs */}
            <h1 className='text-white font-bold text-[5vmax] uppercase text-center leading-none'>Episodes</h1> {/* Heading */}
            <div className='border-t-1 border-white/50 w-[30vmax]'></div>
        </div>

        <div className='flex justify-between px-7 text-white'>
            <Link to={'/Home'}>Home</Link>
            <p>Total Episodes: {epData.length}</p>
            <div>
            <span>Page:  </span>
            <select name="season" id="season" onChange={handleSeasonChange}>
                <option value="1">P1</option>
                <option value="2">P2</option>
                <option value="3">P3</option>
                <option value="4">P4</option>
                <option value="5">P5</option>
            </select>
            </div>
        </div>

        <div className='px-3 py-[4vmax]'>
        {loading && <p className='text-center text-white font-medium text-3xl'>Loading....</p>}            
            {!loading && epData.map((eps, idx)=>(
                <div key={idx} className='flex justify-between items-center my-4 text-white h-25 w-full bg-white/10 rounded-2xl p-[1vmax] py-[3vmax] cursor-pointer hover:scale-102 hover:bg-black/10 transition-all duration-300'>
                    <div className="flex items-center">
                        {/* Episode image container */}
                        <div className='flex justify-center items-center gap-2 h-17 w-30 bg-zinc-100/30 rounded-[4px] mr-4 bg-cover overflow-hidden'>
                            <img src='/aotIco.png' className='h-full' alt={eps.episode} />
                            <p>{eps.episode}</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-2xl'>{eps.episode}</h2>
                            <p className='text-xl font-extralight leading-5'>{eps.name}</p>
                        </div>
                    </div>
                    {/* <span className="text-8xl"><MdKeyboardArrowRight /></span> */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllEpisodes