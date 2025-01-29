import React from 'react'
import deadpol from '/deadpol.png'

function About() {
  return (
    <div className='w-screen h-screen flex flex-col p-5 lg:p-10 items-center justify-center relative'>
      <img src={deadpol} alt="" className='absolute top-[3%] w-[86%] sm:w-[60%] ' />
      <h1 className='text-2xl sm:text-4xl text-zinc-300 underline font-black z-10 my-4 sm:my-8'>About Film-Fusion</h1>
      <p className='text-zinc-400 text-1xl w-[98%] sm:w-[70%] z-10 text-justify'>Welcome to FilmFusion, your one-stop destination for everything movies and TV shows! Discover a world of entertainment with our extensive collection of trailers, where you can get a sneak peek at the latest blockbusters and trending TV shows.
      <br /><br />
        With FilmFusion, stay informed about release dates, ratings, genres, and durations to plan your next binge-watching session effortlessly. Dive deeper into the stories and stars behind the screen—explore actor profiles, including their names, birthdays, birthplaces, biographies, and their work across films and series.
        <br /><br />
        Whether you're a cinephile or a casual viewer, FilmFusion is designed to enhance your viewing experience by providing detailed insights into the entertainment world. Stay connected with your favorite stars and discover new favorites today!</p>
    </div>
  )
}

export default About