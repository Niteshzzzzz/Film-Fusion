import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './templates/TopNav'
import Dropdown from './templates/Dropdown'
import axios from '../utils/axios'
import Loader from './Loader'
import Cards from './Cards'
import InfiniteScroll from 'react-infinite-scroll-component'

function Trending() {
    document.title ='FILM-FUSION | Trending'
    const navigate = useNavigate()
    const [category, setCategory] = useState('all')
    const [duration, setDuration] = useState('day')
    const [trending, setTrending] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`trending/${category}/${duration}?page=${page}`)
            if (data.results.length > 0) {
                setTrending((prevState) => [...prevState, ...data.results])
                setPage(page+1)  
            }else{
                sethasMore(false)
            }
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const refreshHandler = () => {
        if (trending.length === 0) {
            getTrending()
        }else{
            setPage(1)
            setTrending([])
            getTrending()
        }
    }

    useEffect(() => {
        refreshHandler()
    }, [category, duration])

    return (
        trending.length>0 ?
            <div className='w-[100vw] h-auto'>
                <div className=" flex justify-start items-center p-6">
                    <h1 className='text-3xl text-zinc-100 font-semibold flex items-center'><FontAwesomeIcon icon={faArrowLeft} className='mr-3 ml-1 cursor-pointer hover:bg-zinc-700 rounded-full py-1 px-[7px] duration-200 hover:ml-0 hover:mr-4' onClick={() => navigate(-1)} /><span>Trending</span></h1>
                    <div className="w-[90%] mt-[-20px]">
                        <TopNav status={'hidden'} />
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <Dropdown title={'Category'} category={['all', 'tv', 'movie']} setFilter={setCategory} />
                        <Dropdown title={'Duration'} category={['day', 'week']} setFilter={setDuration} />
                    </div>
                </div>
                <InfiniteScroll
                    dataLength={trending.length}
                    next={getTrending}
                    hasMore={hasMore}
                    loader={<h1 className='text-xl text-zinc-100 align-middle'>Loading...</h1>}
                >
                    <Cards trending={trending} title={category} />
                </InfiniteScroll>
            </div> : <Loader />
    )
}

export default Trending