import React from 'react'
import './Blog.css'
import { BlogData } from './Ourblogdata';

function Blog() {
    return (
        <div className="Blog">
            <span className="title-blog">
                Our Blog
            </span>
            <div className="blog-list">
                {BlogData.map((blog, index) => {
                    return (
                        <div className="blog-container">
                            <img src={blog.image} alt="" className='blog-image' />
                            <span className="title-blogs">
                                {blog.title}
                            </span>
                            <span className="content-blogs">
                                {blog.content}
                            </span>
                            <form action={blog.link}>
                                <button type="submit" className='read-more-blog'>Read More</button>
                            </form>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Blog