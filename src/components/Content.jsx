import React from 'react'
import { useLoaderData } from 'react-router'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import placeHolderImage from "../assets/404.jpg"
function Content() {
    const blog_content = useLoaderData();
    const { cover_image, title, description, published_at, tags, body_html, url } = blog_content;
    console.log(tags);
    return (
        <div className="w-full text-base-content overflow-hidden group transition-colors duration-300">
            <div className="w-full max-w-6xl mx-auto p-1 rounded-xl shadow-md bg-base-100 text-base-content transition-colors duration-300">
                <img
                    src={cover_image || placeHolderImage}
                    alt=""
                    className="object-cover object-center w-full h-72 rounded-xl bg-base-300"
                />
                <div className="mt-6 mb-2">
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-base-300">
                        {tags.map((tag, key) => (
                            <a
                                key={key}
                                rel="noopener noreferrer"
                                href="#"
                                className="px-3 py-1 rounded-sm hover:underline  text-content"
                            >
                                #{tag}
                            </a>
                        ))}
                    </div>
                    <h2 className="text-2xl font-semibold tracking-wide">
                        {title}
                    </h2>
                </div>
                <p>
                    Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed
                    feugiat mi. Etiam ut lacinia dui.
                </p>

                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {body_html}
                </ReactMarkdown>

            </div>
        </div>

    )
}

export default Content