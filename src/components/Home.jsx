import React from 'react'
import Sidebar from './templates/Sidebar'
import TopNav from './templates/TopNav'

function Home() {
  document.title = 'FILM-FUSION | Homepage'
  return (
    <div className='flex'>
      <Sidebar />
      <div className="w-[80%] h-screen">
        <TopNav />
      </div>
    </div>
  )
}

export default Home