import { faCalendarDays, faCirclePlay, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Header({ wallpaper }) {
    return (
        <div className='w-full h-[32vh] sm:h-[50vh] mt-10 sm:mt-5 text-white px-2 sm:px-5 py-4 sm:py-10 flex items-start justify-end flex-col' style={{
            background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.6),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <h1 className='text-2xl md:text-5xl font-bold'>{wallpaper.name || wallpaper.title || wallpaper.original_name || wallpaper.original_title}</h1>
            <p className='mt-2 sm:mt-4 w-[90%] sm:w-[80%] text-sm sm:text-base'>{wallpaper.overview.slice(0, 200)}... <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}`} className='text-blue-400'>more.</Link></p>
            <div className="flex gap-10 mt-2 sm:mt-4">
                <p className='text-sm sm:text-base'><FontAwesomeIcon icon={faCalendarDays} className='mr-2 text-yellow-400 text-lg sm:text-xl' />{wallpaper.release_date || 'N/A'}</p>
                <p className='text-sm sm:text-base'><FontAwesomeIcon icon={faCompactDisc} className='mr-2 text-yellow-400 text-lg sm:text-xl' />{wallpaper.media_type.toUpperCase()}</p>
            </div>
            <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}`} className="flex justify-center items-center relative mt-[-6px] sm:mt-[0px]">
                <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#74C0FC", }} className='text-4xl sm:text-5xl mt-4 z-10 shadow-xl'/>
                <span className='bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] sm:py-[3px] pl-3 rounded-r-full absolute w-[102px] sm:w-[110px] left-7 sm:left-10 sm:top-[25px] top-[22px] text-black text-sm sm:text-base'>Watch Trailer</span>
            </Link>
        </div>
    )
}

export default Header