import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved, faClapperboard, faChalkboard, faPeopleGroup, faCircleInfo, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFilesPinwheel } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
    return (
        <div className='w-[20%] border-r-2 border-zinc-400 h-screen py-10'>
            <div className="flex gap-2 items-center w-[100%] justify-center">
                <img src="../public/movieIcon.svg" alt="" className='text-2xl w-[34px]' />
                <h1 className='text-zinc-100 text-2xl font-bold underline '>FILM-FUSION</h1>
            </div>
            <nav className='flex flex-col px-10 gap-3 text-xl text-zinc-300'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
                <Link className='px-5 py-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300'>       
                <FontAwesomeIcon icon={faFireFlameCurved} className='mr-2'/>Trending</Link>
                <Link className='px-5 py-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300'><FontAwesomeIcon icon={faFilesPinwheel} className='mr-2'/>Popular</Link>
                <Link className='px-5 py-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300'><FontAwesomeIcon icon={faClapperboard} className='mr-2'/>Movies</Link>
                <Link className='px-5 py-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300'><FontAwesomeIcon icon={faChalkboard} className='mr-2'/>Tv Shows</Link>
                <Link className='px-5 py-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300'> <FontAwesomeIcon icon={faPeopleGroup} className='mr-2'/>People </Link>
            </nav>
            <hr className='w-[80%] m-auto mt-5'/>
            <nav className='flex flex-col px-10 gap-3 text-xl text-zinc-300'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>
                <Link className='px-5 py-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300'>       
                <FontAwesomeIcon icon={faCircleInfo} className='mr-2'/>About FilmFusion</Link>
                <Link className='px-5 py-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300'><FontAwesomeIcon icon={faPhone} className='mr-2'/>Contect Us</Link>
               
            </nav>
        </div>
    )
}

export default Sidebar