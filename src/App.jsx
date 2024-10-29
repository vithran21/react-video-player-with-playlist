import React from 'react'
import VideoPlayerContainer from './components/VideoPlayerContainer'
import videojson from './json/video.json'
import Navbar from './components/NavBar'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <VideoPlayerContainer videoJson={videojson}/>
    </div>
  )
}

export default App