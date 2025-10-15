import React from 'react'
import wave from "../assets/wave.svg"
import { Link } from 'react-router'
import Hero from '../components/Hero'
function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-116px)] overflow-hidden">
      {/* Hero section center e */}
      <div className="z-10 flex justify-center items-center w-full h-full">
        <Hero />
      </div>

      {/* Bottom wave image */}
      <img
        className="absolute bottom-0 w-full pointer-events-none select-none"
        src={wave}
        alt="decorative wave"
      />
    </div>
  )
}

export default Home