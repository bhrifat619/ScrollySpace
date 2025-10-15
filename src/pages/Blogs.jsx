import React from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router';
import placeHolderImage from "../assets/404.jpg"
import BlogCard from '../components/BlogCard';
import Loader from '../components/Loader';
function Blogs() {
    const blogs = useLoaderData()
    console.log(blogs);
    const navigation = useNavigation();
    if (navigation.state === "loading") return <Loader />
    return (
        <section className="bg-base-200 text-base-content transition-colors duration-300">
            

            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link
                    to={`/blog/${blogs[0].id}`}
                    className="block mx-auto overflow-hidden transition-transform duration-300 bg-base-100 rounded-2xl shadow-lg hover:scale-[1.02] focus:no-underline group lg:grid lg:grid-cols-12"
                >
                    <img
                        src={blogs[0].cover_image || placeHolderImage}
                        alt={blogs[0].title}
                        className="object-cover w-full h-64 rounded-t-2xl lg:rounded-none lg:rounded-l-2xl sm:h-96 lg:col-span-7"
                    />

                    <div className="p-6 space-y-3 lg:col-span-5">
                        <h3 className="text-3xl font-bold group-hover:text-primary group-focus:underline">
                            {blogs[0].title}
                        </h3>
                        <span className="text-sm opacity-70">
                            {new Date(blogs[0].published_at).toLocaleDateString()}
                        </span>
                        <p className="text-sm leading-relaxed">{blogs[0].description}</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.slice(1, 19).map((blog) => (
                        <BlogCard blog={blog} key={blog.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs