import React, { useEffect, useState } from 'react'
import Sidebar from './templates/Sidebar'
import TopNav from './templates/TopNav'
import Header from './templates/Header'
import axios from '../utils/axios'

function Home() {
  document.title = 'FILM-FUSION | Homepage'
  const [wallpaper, setWallpaper] = useState(null)

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`)
      const randomData = data.results[(Math.random()*data.results.length).toFixed()]
      setWallpaper(randomData)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {getWallpaper()}, [])

  return (
    wallpaper ? 
    <div className='flex'>
      <Sidebar />
      <div className="w-[80%] h-screen">
        <TopNav />
        <Header wallpaper={wallpaper} />
      </div>
    </div> : <h1>Loading...</h1>
  )
}

export default Home