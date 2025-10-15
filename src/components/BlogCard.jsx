import React from 'react'
import placeHolderImage from "../assets/404.jpg"
import { Link } from 'react-router'
import { MdDeleteForever } from 'react-icons/md';
function BlogCard({ blog, delatable,handleDelete }) {
    const { cover_image, title, published_at, description, id } = blog;
    return (
        <div className="max-w-sm mx-auto overflow-hidden transition-transform duration-300 bg-base-100 border rounded-2xl shadow hover:scale-[1.03] border-base-300 hover:border-primary group flex flex-col">
            <Link
                to={`/blog/${id}`}
                rel="noopener noreferrer"
                className="flex-1"
            >
                <img
                    src={cover_image || placeHolderImage}
                    alt={title}
                    className="object-cover w-full h-44 bg-base-300"
                />

                <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-semibold transition-colors duration-200 group-hover:text-primary">
                        {title}
                    </h3>

                    <span className="block text-sm opacity-70">
                        {new Date(published_at).toLocaleDateString()}
                    </span>

                    <p className="text-sm leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>
            </Link>
            {delatable && (
                <div className="p-6 flex justify-end mt-auto">
                    <div
                        onClick={() => handleDelete(id)}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
             bg-primary hover:bg-secondary-light dark:hover:bg-secondary cursor-pointer 
             transition-colors duration-200 hover:scale-105"
                    >
                        <MdDeleteForever
                            size={20}
                            className="text-white dark:text-white"
                        />
                    </div>
                </div>

            )}

        </div>
    )
}

export default BlogCard