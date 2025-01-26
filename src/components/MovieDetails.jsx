import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { asyncAddMovie, removeMovie } from '../store/actions/movieAction'
import Loader from './Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowUpRightFromSquare, faCalendarDays, faCirclePlay, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faImdb, faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import noImage from '/noImage.jpeg'
import Trending from './templates/Trending'

const MovieDetails = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncAddMovie(id))
    return () => { dispatch(removeMovie()) }
  }, [id])
  const { info } = useSelector((state) => state.movie)

  return info ? (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.6),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path || info.detail.profile_path})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }} className='relative w-screen min-h-screen pb-5 overflow-x-hidden'>
      <nav className='px-5 text-2xl text-zinc-200 w-full h-[10vh] flex gap-10 items-center'>
        <div className='text-3xl text-zinc-100 font-semibold flex items-center'><FontAwesomeIcon icon={faArrowLeft} className='hover:text-[#6556cd] mr-3 ml-1 cursor-pointer hover:bg-zinc-300 rounded-full py-1 px-[7px] duration-200 hover:ml-0 hover:mr-4' onClick={() => navigate(-1)} /></div>
        <a target='_blank' className='hover:text-blue-500' href={info.detail.homepage}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        <a target='_blank' className='hover:text-blue-500 text-3xl' href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}><FontAwesomeIcon icon={faImdb} className='font-bold' /></a>
        <a target='_blank' className='hover:text-blue-500' href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}><FontAwesomeIcon icon={faWikipediaW} /></a>
      </nav>
      <div className="flex items-center justify-around mt-3 px-10">
        <img src={info.detail.poster_path || info.detail.backdrop_path || info.detail.profile_path ? `https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path || info.detail.profile_path}` : noImage} alt="" className='w-[340px] h-[62vh] shadow-[8px_20px_32px_2px_rgba(0,0,0, 0.5)] object-cover' />
        <div className="text-zinc-200 w-[60%]">
          <h1 className='text-5xl font-bold'>{info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}</h1>
          {info.detail.vote_average && <div className='flex items-center gap-5 mt-3'><div className="bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center rounded-full">{(info.detail.vote_average * 10).toFixed()}<sup>%</sup></div>User Score({info.detail.vote_count})</div>}
          <h1 className='mt-3 text-1xl font-semibold'>Overview:</h1>
          <p className='mt-1'>{info.detail.overview}</p>
          <div className="flex gap-10 mt-3">
            <p><FontAwesomeIcon icon={faCalendarDays} className='mr-2 text-yellow-400 text-xl' />{info.detail.release_date || 'N/A'}</p>
            <p><FontAwesomeIcon icon={faCompactDisc} className='mr-2 text-yellow-400 text-xl' />Movie</p>
          </div>
          <div className="flex items-center">
            <h1 className='mt-3 text-1xl font-semibold mr-3'>Genres:</h1>
            {
              info.detail.genres.map((g, i) => <p key={i} className='mr-2 mt-3' >{g.name},</p>)
            }
          </div>
          <div className="flex items-center mt-3"><h1 className='text-1xl font-semibold mr-3'>Duration:</h1>{info.detail.runtime} min.</div>
          <h1 className='mt-3 text-1xl font-semibold'>Movie Translated:</h1>
          <p className='mt-1'>{info.translations.map((t) => t.english_name).join(', ')}</p>
          <div className="flex items-center justify-start">
            <Link to={`/movie/details/${info.detail.id}/trailer`} className="flex justify-center items-center relative">
              <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#74C0FC", }} className='text-5xl mt-4 z-10 shadow-xl' />
              <span className='bg-gradient-to-r from-cyan-500 to-blue-500 py-[3px] pl-3 rounded-r-full absolute w-[110px] left-10 top-[25px] text-black'>Watch Trailer</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-20 pt-5 text-zinc-200">
        <div className="flex gap-5 items-center mb-5">
          <h1 className='mt-3 text-xl font-semibold'>Available on Platforms:</h1>
          {
            info.watchProviders && info.watchProviders.flatrate && info.watchProviders.flatrate.map((f, i) => <img key={i} className='rounded-lg w-[40px]' src={`https://image.tmdb.org/t/p/original/${f.logo_path}`}></img>)
          }
        </div>
        <div className="flex gap-5 items-center mb-5">
          <h1 className='mt-3 text-xl font-semibold'>Available to Buy:</h1>
          {
            info.watchProviders && info.watchProviders.buy && info.watchProviders.buy.map((f, i) => <img key={i} className='rounded-lg w-[40px]' src={`https://image.tmdb.org/t/p/original/${f.logo_path}`}></img>)
          }
        </div>
        <div className="flex gap-5 items-center mb-5">
          <h1 className='mt-3 text-xl font-semibold'>Available on Rent:</h1>
          {
            info.watchProviders && info.watchProviders.rent && info.watchProviders.rent.map((f, i) => <img key={i} className='rounded-lg w-[40px]' src={`https://image.tmdb.org/t/p/original/${f.logo_path}`}></img>)
          }
        </div>
      </div>
      <hr className='border-none bg-zinc-400 h-[2px] w-[95%] mx-auto my-5' />
      <div className="px-10 mt-2">
        <h1 className='mt-3 text-3xl font-semibold text-white'>Recommendations & Similar Stuff:</h1>
        <Trending trending={info.recommendations.length > 0 ? info.recommendations : info.similar} />
      </div>
      <Outlet />
    </div>
  ) : <Loader />
}

export default MovieDetails