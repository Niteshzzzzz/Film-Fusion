import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noImage from '/noImage.jpeg'

function TopNav({bar, setBar, status}) {

    const [query, setQuery] = useState('')
    const [searches, setSearches] = useState([])

    const getSearches = async () => {
        try {
            const { data } = await axios.get(`search/multi?query=${query}`)
            setSearches(data.results)
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    useEffect(() => {
        getSearches()
    }, [query])

    return (
        <div className='z-50 flex w-[100%] justify-center items-center mt-10 sm:mt-5 relative'>
            <div className={`${status} text-3xl text-zinc-300 absolute top-2 left-4 lg:hidden hover:text-zinc-100 duration-300`} onClick={() => {bar === '-250px' ? setBar('0px') : setBar('-250px')}}>
            <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="w-[65%] flex justify-center items-center relative border border-zinc-400 px-3 sm:px-4 rounded-full hover:border-blue-500">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl text-zinc-300' />
                <input type="text" placeholder='Search Anything...' className='text-1xl sm:text-xl text-zinc-200 bg-transparent w-full px-4 py-[10px] outline-none border-none' onChange={(e) => setQuery(e.target.value)} value={query} />
                {
                    query && <FontAwesomeIcon icon={faXmark} className='text-2xl text-white absolute right-5 cursor-pointer' onClick={() => setQuery('')} />
                }
            </div>

            <div className="w-[59%] bg-zinc-100 max-h-[50vh] absolute top-[104%] overflow-auto rounded-lg">
                {
                    searches.map((s, i) => 
                        <Link to={`/${s.media_type}/details/${s.id}`} key={i} className='py-4 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                            <img src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${ s.backdrop_path || s.profile_path}`: noImage} alt="" className='w-[9vw] h-[9vh] object-cover mr-3 shadow-lg' />
                            <span>{s.name || s.title || s.original_name || s.original_title}</span>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default TopNav