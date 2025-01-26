import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./components/Trending"
import Popular from "./components/Popular"
import Movie from "./components/Movie"
import TvShows from "./components/TvShows"
import People from "./components/People"
import TvDetails from "./components/TvDetails"
import PersonDetails from "./components/PersonDetails"
import Trailer from "./components/templates/Trailer"
import Notfound from './components/Notfound'
import About from './components/About'
import ContactUs from "./components/ContactUs"
import MovieDetails from './components/MovieDetails'

function App() {

  return (
    <div className="w-screen h-screen bg-[#1f1e24]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails/>} >
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />} >
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="/about/Film-Fusion" element={<About />} /> 
        <Route path="/contactUS/Film-Fusion" element={<ContactUs />} /> 
        <Route path="*" element={<Notfound />} /> 
      </Routes>
    </div>
  )
}

export default App
