import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AllCharacters = () => {
    
    const [charData, setcharData] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedPage, setselectedPage] = useState('1');
    const charsImg = [
        'https://staticg.sportskeeda.com/editor/2022/03/85f50-16473663883692-1920.jpg',
        'https://cdn.staticneo.com/w/attackontitan/MikasaAckerman.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPPCqeBFPrltCHM1iObQPQbDpn1duXu3buw&s',
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/connie-looking-at-titan.jpg',
        'https://i.pinimg.com/736x/3a/37/50/3a37503f0ced98a450811d3b6cd6ad57.jpg',
    ]
    
     const fetchData = async()=>{
        try{
            setLoading(true)
            const resp = await fetch(`https://api.attackontitanapi.com/characters?page=${selectedPage}`);
            if(!resp.ok){
                throw new Error('Network Error')
            }
            const result = await resp.json()
            console.log('fetched!')
            setcharData(result.results)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }
    console.log(charData)
    const handleSeasonChange = (event) => {
        setselectedPage(event.target.value);
        // fetchData(); // Fetch new data based on the selected season
    };

    // const EpisodesData = Object.entries(charData.map((item, index)=>({
    //     id:item,
    //     name:index
    // })))
    // console.log(EpisodesData)
    useEffect(()=>{
        fetchData()
    }, [selectedPage])
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#AF502C] to-[#A90003] py-10 font-Popings'>
        <div className='flex justify-center items-center gap-5'>
            <div className='border-t-1 border-white/50 w-[30vmax]'></div> {/* These should not touch the borders in responsive designs */}
            <h1 className='text-white font-bold text-[5vmax] uppercase text-center leading-none'>Characters</h1> {/* Heading */}
            <div className='border-t-1 border-white/50 w-[30vmax]'></div>
        </div>

        <div className='flex justify-between px-7 py-3 text-white'>
            <Link to={'/Home'}>Home</Link>
            <p>Total Characters: {charData.length}</p>
            <div>
            <span>Page:  </span>
            <select name="season" id="season" onChange={handleSeasonChange}>
                <option value="1">P1</option>
                <option value="2">P2</option>
                <option value="3">P3</option>
                <option value="4">P4</option>
                <option value="5">P5</option>
                <option value="6">P6</option>
                <option value="7">P7</option>
                <option value="8">P8</option>
                <option value="9">P9</option>
                <option value="10">P10</option>
                <option value="11">P11</option>

            </select>
            </div>
        </div>

        {loading && <p className='text-center text-white font-medium text-3xl'>Loading....</p>}            
        <div className='py-5 px-10 sm:px-30'>
            {charData.map((char, idx)=>(
                <div className='flex sm:flex-row flex-col items-center gap-10 my-4 px-10 py-4 rounded-2xl bg-white/10 text-white' key={idx}>
                    <div className='bg-white w-[25vmax] sm:w-[16vmax] h-[15vmax] sm:h-[10vmax] rounded-2xl'>
                        <img className='rounded-2xl h-full w-full object-cover object-center' src={charsImg[idx] || '/ErenLastEye2.png'} alt="AOT Character" />
                    </div>

                    <div className='text-left'>
                        <h1 className='font-bold text-2xl'>{char.name}</h1>
                        <p className='text-black/90'><span className='font-medium text-black'>Age:</span> {char.age}</p>
                        <p className='text-black/90'><span className='font-medium text-black'>Birthplace:</span> {char.birthplace}</p>
                        <p className='text-black/90'><span className='font-medium text-black'>Gender:</span> {char.gender}</p>
                        <p className='text-black/90'><span className='font-medium text-black'>Height:</span> {char.height}</p>
                    </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default AllCharacters