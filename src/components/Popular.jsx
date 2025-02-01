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

function Popular() {
    document.title = 'FILM-FUSION | Popular'
    const navigate = useNavigate()
    const [category, setCategory] = useState('movie')
    const [popular, setpopular] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

    const getpopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`)
            if (data.results.length > 0) {
                setpopular((prevState) => [...prevState, ...data.results])
                setPage(page + 1)
            } else {
                sethasMore(false)
            }
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const refreshHandler = () => {
        if (popular.length === 0) {
            getpopular()
        } else {
            setPage(1)
            setpopular([])
            getpopular()
        }
    }

    useEffect(() => {
        refreshHandler()
    }, [category])

    return (
        popular.length > 0 ?
            <div className='w-[100vw] h-auto'>
                <div className="flex flex-col md:flex-row justify-start items-center p-6">
                    <div className="flex justify-start items-center w-full">
                        <h1 className='z-10 hidden text-2xl md:text-3xl text-zinc-100 font-semibold sm:flex items-center'><FontAwesomeIcon icon={faArrowLeft} className='mr-3 ml-1 cursor-pointer hover:bg-zinc-700 rounded-full py-1 px-[7px] duration-200 hover:ml-0 hover:mr-4' onClick={() => navigate(-1)} /><span>Popular</span></h1>
                        <div className="w-[100vw] sm:w-[100%] mt-[-40px] sm:mt-[-20px]">
                            <TopNav status={'hidden'} />
                        </div>
                    </div>
                    <div className="flex justify-start w-full md:w-auto items-center mt-4 md:mt-0">
                        <Dropdown title={'Category'} category={['movie', 'tv']} setFilter={setCategory} />
                    </div>
                </div>
                <InfiniteScroll
                    dataLength={popular.length}
                    next={getpopular}
                    hasMore={hasMore}
                    loader={<h1 className='text-xl text-zinc-100 align-middle'>Loading...</h1>}
                >
                    <Cards trending={popular} title={category} />
                </InfiniteScroll>
            </div> : <Loader />
    )
}

export default Popular