import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function TopNav() {
  return (
    <div className='flex w-full justify-center items-center mt-8 relative'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl text-white'/>
        <input type="text" placeholder='Search Anything...' className='text-xl text-zinc-200 bg-transparent w-[60%] p-4 outline-none border-none' />
        <FontAwesomeIcon icon={faXmark} className='text-2xl text-white'/>

        <div className="w-[58%] bg-zinc-100 h-[50vh] absolute top-[100%] overflow-auto rounded-lg">
            <Link className='py-7 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                <img src="" alt="" />
                <span>hello friends</span>
            </Link>
            <Link className='py-7 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                <img src="" alt="" />
                <span>hello friends</span>
            </Link>
            <Link className='py-7 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                <img src="" alt="" />
                <span>hello friends</span>
            </Link>
            <Link className='py-7 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                <img src="" alt="" />
                <span>hello friends</span>
            </Link>
            <Link className='py-7 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                <img src="" alt="" />
                <span>hello friends</span>
            </Link>
            <Link className='py-7 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                <img src="" alt="" />
                <span>hello friends</span>
            </Link>
            <Link className='py-7 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                <img src="" alt="" />
                <span>hello friends</span>
            </Link>
            <Link className='py-7 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                <img src="" alt="" />
                <span>hello friends</span>
            </Link>
            <Link className='py-7 px-10 flex items-center justify-start bg-zinc-200 border-b-2 border-zinc-400 text-zinc-700 font-semibold text-1xl hover:bg-zinc-300 hover:text-black duration-300'>
                <img src="" alt="" />
                <span>hello friends</span>
            </Link>
        </div>
    </div>
  )
}

export default TopNav