import React, { useEffect, useState } from 'react'
import Sidebar from './templates/Sidebar'
import TopNav from './templates/TopNav'
import Header from './templates/Header'
import axios from '../utils/axios'
import Trending from './templates/Trending'
import Dropdown from './templates/Dropdown'
import Loader from './Loader'

function Home() {
  document.title = 'FILM-FUSION | Homepage'
  const [wallpaper, setWallpaper] = useState(null)
  const [trending, setTrending] = useState(null)
  const [filter, setFilter] = useState('all')
  const [bar, setBar] = useState('-250px')

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`)
      const randomData = data.results[(Math.random() * data.results.length).toFixed()]
      setWallpaper(randomData)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${filter}/day`)
      setTrending(data.results)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    !wallpaper && getWallpaper()
    getTrending()
  }, [filter])

  return (
    wallpaper && trending ?
      <div className='flex overflow-hidden h-screen'>
        <Sidebar bar={bar}  />
        <div className="lg:w-[78%] 2xl:w-[80%] h-screen overflow-y-auto overflow-x-hidden">
          <TopNav bar={bar} setBar={setBar} status={'block'}/>
          <Header wallpaper={wallpaper} />
          <div className="p-4 pb-2 flex justify-between items-center relative">
            <h1 className='text-xl sm:text-3xl text-zinc-300 font-bold'>Trending</h1>
            <Dropdown title={'Filter'} category={['all', 'tv', 'movie']} setFilter={setFilter} />
          </div>
          <Trending trending={trending} />
        </div>
      </div> : <Loader/>
  )
}

export default Home