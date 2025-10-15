import React, { useEffect, useState } from 'react'
import { deleteBlog, getBlogs } from '../utilities/bookmarkOperation'
import BlogCard from '../components/BlogCard'
import EmptyState from '../components/EmptyState'
import label from 'daisyui/components/label'

function Bookmarks() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const storedBlogs = getBlogs()
    setBlogs(storedBlogs)
  }, [])

  const handleDelete = id => {
    deleteBlog(id)
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }
  if(blogs<1)return <EmptyState message={"No bookmarks available"} address={"/blogs"} label={"Go to blogs"}/>
  return (
    <div className='grid mt-3 justify-center grid-cols-1 px-4 sm:px-8 lg:px-12 py-4 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {blogs.map((blog) => {
        return <BlogCard delatable={true} handleDelete={handleDelete} blog={blog} key={blog.id} />
      })}
    </div>
  )
}

export default Bookmarks