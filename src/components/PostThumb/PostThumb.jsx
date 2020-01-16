import React from 'react';
import hot_post_1 from "../../issets/img/hot-post-1.jpg";
import {Link} from "react-router-dom";

const PostThumb = ({post}) => {
    return (
        <div className="post post-thumb">
            <a className="post-img" href="blog-post.html"><img src={hot_post_1} alt=""/></a>
            <div className="post-body">
                <div className="post-category">
                    {
                        post.categories.map((category, index) =>  {
                            if(index < 2) {
                                return <Link key={index} to={category.category_slug}>{category.category_name}</Link>
                            }
                        })
                    }
                </div>
                <h3 className="post-title title-lg">
                    <Link to={post.slug}>
                        {post.post_title}
                    </Link>
                </h3>
                <ul className="post-meta">
                    <li><a href="author.html">{post.NameAuthor}</a></li>
                    <li>{post.updated_at}</li>
                </ul>
            </div>
        </div>
    )
}
export default PostThumb;