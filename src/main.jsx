import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import Blog from './pages/Blog.jsx';
import Content from './components/Content.jsx';
import Author from './components/Author.jsx';

import toast, { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blogs",
        loader: () => fetch("https://dev.to/api/articles/latest?per_page=20&top=15"),
        element: <Blogs />
      },
      {
        path: "/blog/:id",
        element: <Blog />,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          }
        ]
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
)
