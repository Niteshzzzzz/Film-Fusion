import { faCalendarDays, faCirclePlay, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Header({ wallpaper }) {
    console.log(wallpaper)

    return (
        <div className='w-full h-[50vh] mt-5 text-white px-5 py-10 flex items-start justify-end flex-col' style={{
            background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.6),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <h1 className='text-5xl font-bold'>{wallpaper.name || wallpaper.title || wallpaper.original_name || wallpaper.original_title}</h1>
            <p className='mt-4 w-[80%]'>{wallpaper.overview.slice(0, 200)}... <Link className='text-blue-400'>more.</Link></p>
            <div className="flex gap-10 mt-4">
                <p><FontAwesomeIcon icon={faCalendarDays} className='mr-2 text-yellow-400 text-xl' />{wallpaper.release_date || 'N/A'}</p>
                <p><FontAwesomeIcon icon={faCompactDisc} className='mr-2 text-yellow-400 text-xl' />{wallpaper.media_type.toUpperCase()}</p>
            </div>
            <Link className="flex justify-center items-center relative">
                <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#74C0FC", }} className='text-5xl mt-4 z-10 shadow-xl'/>
                <span className='bg-gradient-to-r from-cyan-500 to-blue-500 py-[3px] pl-3 rounded-r-full absolute w-[110px] left-10 top-[25px] text-black'>Watch Trailer</span>
            </Link>
        </div>
    )
}

export default Header