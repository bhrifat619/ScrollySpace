import React from 'react'
import { Link } from 'react-router'

function Hero() {
    return (
        <section className="transition-all duration-500">
            <div className="mx-auto flex flex-col items-center text-center xl:max-w-3xl text-base-content">
                <h1 className="text-4xl font-bold sm:text-5xl">
                    Welcome to <span className='text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-indigo-500 text-transparent  bg-300% bg-clip-text animate-gradient'>ScrollySpace</span>
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">
                    Dive into ideas that move you — Scrolly Space is your corner of the internet to read, write, and connect through stories that matter.
                </p>
                <div className="flex flex-wrap gap-2 justify-center w-full max-w-sm mx-auto">
                    <Link
                        to="/blogs"
                        className="flex-1 min-w-[80px] text-center px-3 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-xl transition-all duration-300"
                    >
                        Blogs
                    </Link>

                    <Link
                        to="/bookmarks"
                        className="flex-1 min-w-[80px] text-center px-3 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-xl transition-all duration-300"
                    >
                        Bookmarks
                    </Link>
                </div>

            </div>
        </section>



    )
}

export default Hero