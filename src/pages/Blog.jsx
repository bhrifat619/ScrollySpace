import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLoaderData, useLocation } from 'react-router'
import placeHolderImage from '../assets/404.jpg'
import { MdBookmarkAdd } from 'react-icons/md';
import { saveBlog } from '../utilities/bookmarkOperation';
function Blog() {
    // content components and markdown egula korte hobe.
    const [tabIndex, setTabIndex] = useState(0);
    const blog = useLoaderData();
    const { comments_count, title, published_at, reading_time_minutes, public_reactions_count, tags } = blog;
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.endsWith("/author")) {
            setTabIndex(1)
        }
        else {
            setTabIndex(0)
        }
    }, [location.pathname])
    const handleBookmark = (blog) => {
        saveBlog(blog)
    }
    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 bg-base-100 text-base-content rounded-xl  transition-colors duration-300">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>

                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-sm text-base-content/70">
                        <p>{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
                        <p className="flex-shrink-0 mt-3 md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-base-300">
                        <Link
                            to=""
                            onClick={() => setTabIndex(0)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg transition-all duration-300 ${tabIndex === 0
                                ? 'border border-b-0 border-base-300 bg-base-200 text-primary'
                                : 'border-b border-transparent text-base-content/70 hover:text-primary hover:bg-base-200/60'
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>Content</span>
                        </Link>

                        <Link
                            to="author"
                            onClick={() => setTabIndex(1)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg transition-all duration-300 ${tabIndex === 1
                                ? 'border border-b-0 border-base-300 bg-base-200 text-primary'
                                : 'border-b border-transparent text-base-content/70 hover:text-primary hover:bg-base-200/60'
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                        <div onClick={() => handleBookmark(blog)} className=" text-center text-white hover:scale-105 overflow-hidden flex justify-center text-2xl bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer">
                            <MdBookmarkAdd />
                        </div>
                    </div>
                </div>
                <Outlet />
                {/* upore content and author er content gula ashbe routing theke , eta ke nested routing bole  */}
            </article>
        </div>
    )
}

export default Blog