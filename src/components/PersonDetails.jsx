import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import Loader from './Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowUpRightFromSquare, faCalendarDays, faCirclePlay, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faImdb, faSquareFacebook, faSquareInstagram, faWikipediaW, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import noImage from '/noImage.jpeg'
import Trending from './templates/Trending'
import { removePerson } from '../store/reducers/personSlice'
import { asyncAddPerson } from '../store/actions/personAction'
import Dropdown from './templates/Dropdown'
import Cards from './Cards'

function PersonDetails() {

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [category, setCategory] = useState('movie')
  useEffect(() => {
    dispatch(asyncAddPerson(id))
    return () => { dispatch(removePerson()) }
  }, [id])
  const { info } = useSelector((state) => state.person)

  return info ? (
    <div className='w-screen p-8 bg-[#1f1e24]'>
      <div className='text-3xl text-zinc-100 font-semibold flex items-center'><FontAwesomeIcon icon={faArrowLeft} className='hover:text-[#6556cd] mr-3 ml-1 cursor-pointer hover:bg-zinc-300 rounded-full py-1 px-[7px] duration-200 hover:ml-0 hover:mr-4' onClick={() => navigate(-1)} /></div>
      <div className="my-5 justify-around mt-10 flex gap-x-10 items-center">
        <div className="">
          <img src={info.detail.profile_path ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}` : noImage} alt="" className='w-[260px] shadow-[8px_20px_32px_2px_rgba(0,0,0, 0.5)] object-cover' />
        </div>
        <div className="max-w-[60%]">
          <h1 className='text-5xl font-bold text-zinc-200'>{info.detail.name}</h1>
          <div className="flex items-center gap-2 text-zinc-300 mt-3">
            <h1 className='text-1xl font-semibold'>Know For:</h1>
            <p className=' '>{info.detail.known_for_department}</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-300 mt-3">
            <h1 className='text-1xl font-semibold'>Gender:</h1>
            <p className=' '>{(info.detail.gender == 1) ? 'Female' : 'Male'}</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-300 mt-3">
            <h1 className='text-1xl font-semibold'>Birthday:</h1>
            <p className=' '>{info.detail.birthday}</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-300 mt-3">
            <h1 className='text-1xl font-semibold'>Deathday:</h1>
            <p className=' '>{info.detail.deathday ? info.detail.deathday : 'Still Alive'}</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-300 mt-3">
            <h1 className='text-1xl font-semibold'>Place of Birth:</h1>
            <p className=' '>{info.detail.place_of_birth}</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-300 mt-3">
            <h1 className='text-1xl font-semibold'>Also Known As:</h1>
            <p className=' '>{info.detail.also_known_as.join(', ')}</p>
          </div>
          <hr className='border-none bg-zinc-400 h-[2px] w-[100%] mx-auto my-5' />
          <div className="text-3xl text-white flex items-center gap-8">
            <a href={`https://www.facebook.com/${info.externalId.facebook_id}`} target='_blank'><FontAwesomeIcon icon={faSquareFacebook} className='hover:text-blue-400' /></a>
            <a href={`https://www.instagram.com/${info.externalId.instagram_id}`} target='_blank'><FontAwesomeIcon icon={faSquareInstagram} className='hover:text-red-400' /></a>
            <a href={`https://x.com/${info.externalId.twitter_id}`} target='_blank'><FontAwesomeIcon icon={faXTwitter} className='hover:text-blue-400' /></a>
            <a href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`} target='_blank'><FontAwesomeIcon icon={faWikipediaW} className='hover:text-blue-400' /></a>
          </div>
        </div>
      </div>
      <hr className='border-none bg-zinc-400 h-[2px] w-[100%] mx-auto my-5' />
      <div className="flex flex-col items-start justify-center text-zinc-300 mt-3">
        <h1 className='text-2xl font-semibold'>Biography:</h1>
        <p className='mt-2'>{info.detail.biography}</p>
      </div>
      <div className="flex flex-col items-start justify-center text-zinc-300 mt-3">
        <h1 className='text-2xl font-semibold'>Work In:</h1>
        <Trending trending={info.combinedCredits.cast} />
      </div>
      <div className="flex items-center justify-between p-5">
        <h1 className='text-2xl font-semibold text-zinc-300'>Movie & Tv:</h1>
        <Dropdown title={'Filter'} category={['movie', 'tv']} setFilter={setCategory} />
      </div>
      <Cards trending={info[category + 'Credits'].cast} title={category} />

    </div>
  ) : <Loader />
}

export default PersonDetails