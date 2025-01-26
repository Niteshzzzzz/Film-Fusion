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


function Movie() {
    document.title ='FILM-FUSION | movie'
    const navigate = useNavigate()
    const [category, setCategory] = useState('now_playing')
    const [movie, setmovie] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    

    const getmovie = async () => {
        try {
            const { data } = await axios.get(`movie/${category}?page=${page}`)
            if (data.results.length > 0) {
                setmovie((prevState) => [...prevState, ...data.results])
                setPage(page+1)  
            }else{
                sethasMore(false)
            }
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const refreshHandler = () => {
        if (movie.length === 0) {
            getmovie()
        }else{
            setPage(1)
            setmovie([])
            getmovie()
        }
    }

    useEffect(() => {
        refreshHandler()
    }, [category])

    return (
        movie.length>0 ?
            <div className='w-[100vw] h-auto'>
                <div className=" flex justify-start items-center p-6">
                    <h1 className='w-[346px] text-3xl text-zinc-100 font-semibold flex items-center'><FontAwesomeIcon icon={faArrowLeft} className='mr-3 ml-1 cursor-pointer hover:bg-zinc-700 rounded-full py-1 px-[7px] duration-200 hover:ml-0 hover:mr-4' onClick={() => navigate(-1)} /><span>Movie <small className='text-sm'>({category})</small></span></h1>
                    <div className="w-[90%] mt-[-20px]">
                        <TopNav status={'hidden'} />
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <Dropdown title={'Category'} category={['now_playing', 'popular', 'top_rated', 'upcoming']} setFilter={setCategory} />
                    </div>
                </div>
                <InfiniteScroll
                    dataLength={movie.length}
                    next={getmovie}
                    hasMore={hasMore}
                    loader={<h1 className='text-xl text-zinc-100 align-middle'>Loading...</h1>}
                >
                    <Cards trending={movie} title='movie' />
                </InfiniteScroll>
            </div> : <Loader />
    )
}

export default Movie