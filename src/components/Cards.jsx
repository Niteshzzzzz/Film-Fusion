import React from 'react'
import noImage from '/noImage.jpeg'
import { Link } from 'react-router-dom'

function Cards({ trending, title }) {
    return trending.length > 0 ? (
        <div className="text-zinc-100 w-full h-full py-0 px-3 lg:p-10 flex justify-evenly items-center flex-wrap gap-4 md:gap-7 lg:gap-9 bg-[#1F1E24]">
            {
                trending.map((t, i) =>
                    <Link to={`/${t.media_type || title}/details/${t.id}`} key={i} className="relative w-[160px] sm:w-[176px] md:w-[200px] lg:w-[250px] h-[240px] sm:h-[270px] md:h-[330px] lg:h-[380px] bg-black shadow-[8px_20px_32px_2px_rgba(0,0,0, 0.5)]">
                        <img src={t.backdrop_path || t.profile_path ? `https://image.tmdb.org/t/p/original/${t.poster_path || t.backdrop_path || t.profile_path}` : noImage} alt="" className='w-full h-[90%] object-cover' />
                        <h1 className='text-sm sm:text-1xl lg:text-xl font-semibold'>{t.name || t.title || t.original_name || t.original_title}</h1>

                        {t.vote_average && <div className="bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center rounded-full absolute right-[-7%] bottom-[25%]">{(t.vote_average * 10).toFixed()}<sup>%</sup></div>}

                    </Link>
                )
            }
        </div>
    ) : <h1 className='text-2xl text-white font-semibold'>Nothing to Show.</h1>
}

export default Cards