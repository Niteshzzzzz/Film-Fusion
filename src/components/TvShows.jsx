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

function TvShows() {
    document.title = 'FILM-FUSION | Tv-Shows'
    const navigate = useNavigate()
    const [category, setCategory] = useState('airing_today')
    const [TvShows, setTvShows] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

    const getTvShows = async () => {
        try {
            const { data } = await axios.get(`tv/${category}?page=${page}`)
            if (data.results.length > 0) {
                setTvShows((prevState) => [...prevState, ...data.results])
                setPage(page + 1)
            } else {
                sethasMore(false)
            }
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const refreshHandler = () => {
        if (TvShows.length === 0) {
            getTvShows()
        } else {
            setPage(1)
            setTvShows([])
            getTvShows()
        }
    }

    useEffect(() => {
        refreshHandler()
    }, [category])

    return (
        TvShows.length > 0 ?
            <div className='w-[100vw] h-auto'>
                <div className=" flex flex-col md:flex-row justify-start items-center p-6">
                    <div className="flex justify-start items-center w-full">
                        <h1 className='z-10 w-[380px] hidden text-2xl md:text-3xl text-zinc-100 font-semibold sm:flex items-center'><FontAwesomeIcon icon={faArrowLeft} className='mr-3 ml-1 cursor-pointer hover:bg-zinc-700 rounded-full py-1 px-[7px] duration-200 hover:ml-0 hover:mr-4' onClick={() => navigate(-1)} /><span>TvShows <small className='text-sm'>({category})</small></span></h1>
                        <div className="w-[100vw] sm:w-[100%] mt-[-40px] sm:mt-[-20px]">
                            <TopNav status={'hidden'} />
                        </div>
                    </div>
                    <div className="flex justify-start w-full md:w-auto items-center mt-4 md:mt-0">
                        <Dropdown title={'Category'} category={['airing_today', 'on_the_air', 'popular', 'top_rated']} setFilter={setCategory} />
                    </div>
                </div>
                <InfiniteScroll
                    dataLength={TvShows.length}
                    next={getTvShows}
                    hasMore={hasMore}
                    loader={<h1 className='text-xl text-zinc-100 align-middle'>Loading...</h1>}
                >
                    <Cards trending={TvShows} title='tv' />
                </InfiniteScroll>
            </div> : <Loader />
    )
}

export default TvShows