import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../Notfound'

function Trailer() {

    const {pathname} = useLocation()
    const category = pathname.includes('movie') ? 'movie' : 'tv'
    const ytvideo = useSelector(store => store[category].info.videos)
    const navigate = useNavigate()

  return (
    <div className='h-screen w-screen bg-[rgba(0,0,0,.8)] absolute top-0 left-0 flex justify-center items-center z-[1000]'>
        <div className='absolute top-[7%] right-[5%] text-3xl text-zinc-100 font-semibold flex items-center'><FontAwesomeIcon icon={faXmark} className='hover:text-[#6556cd] mr-3 ml-1 cursor-pointer hover:bg-zinc-300 rounded-full py-1 px-[7px] duration-200 hover:ml-0 ' onClick={() => navigate(-1)} /></div>
        {
          ytvideo ? <ReactPlayer controls={true} width={1200} height={620} url={`https://www.youtube.com/watch?v=${ytvideo.key}`} /> : <Notfound />
        }
        
    </div>
  )
}

export default Trailer