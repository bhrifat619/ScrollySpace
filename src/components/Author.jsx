import React from 'react'
import { useLoaderData } from 'react-router'
import { FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import placeHolderImage from '../assets/404.jpg'
function Author() {
    const blog = useLoaderData();
    const {
        name,
        profile_image,
        username,
        github_username,
        twitter_username,
        website_url
    } = blog.user;
    return (
        <div className="flex flex-col justify-center max-w-full p-6 shadow-md rounded-xl sm:px-12 bg-base-100 text-base-content transition-all duration-300">
            <img
                src={profile_image || placeHolderImage}
                alt=""
                className="w-32 h-32 mx-auto rounded-full bg-base-200 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-base-300">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                    <p className="px-5 text-xs sm:text-base opacity-80">{username}</p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                    {/* GitHub */}
                    <a href={`https://github.com/${github_username}`} target='_blank' aria-label="GitHub" className="p-2 rounded-md hover:text-primary transition-colors">
                        <FaGithub />
                    </a>

                    {/* Website */}
                    <a href={website_url} target='_blank' aria-label="Dribbble" className="p-2 rounded-md hover:text-primary transition-colors">
                        <CgProfile />
                    </a>

                    {/* Twitter */}
                    <a href={`https://x.com/${twitter_username}`} target='_blank' aria-label="Twitter" className="p-2 rounded-md hover:text-primary transition-colors">
                        <BsTwitterX />
                    </a>
                </div>
            </div>
        </div>


    )
}

export default Author