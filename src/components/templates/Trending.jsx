import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '/noImage.jpeg'
import Loader from '../Loader'

const Trending = ({ trending }) => {
    return trending ? (
        <div className='w-full'>
            <div className="flex gap-3 justify-around h-full p-4 overflow-x-auto overflow-hidden">
                {
                    trending.map((t, i) =>
                        <Link to={`/${t.media_type}/details/${t.id}`} key={i} className="text-white bg-zinc-900 min-w-[170px] sm:min-w-[220px] overflow-hidden h-[250px] sm:h-[320px] z-10">
                            <img src={(t.backdrop_path || t.profile_path) ? `https://image.tmdb.org/t/p/original/${t.backdrop_path || t.profile_path}`: noImage} alt="" className='w-full h-[40%]' />
                            <div className="px-3 mt-1">
                                <h1 className='text-lg sm:text-xl font-semibold'>{t.name || t.title || t.original_name || t.original_title}</h1>
                                <p className='mt-1 w-[80%] text-sm overflow-y-auto sm:text-base'>{t.overview && t.overview.slice(0, 80)}... <span className='text-zinc-400'>more.</span></p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    ) : <Loader/>
}

export default Trending