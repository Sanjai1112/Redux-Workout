import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "../users/PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButton from "./ReactionsButton";

function PostsList(props) {
  const posts = useSelector((state) =>
    state.posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  ); // we slice the original posts to get new posts and make modification in that

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <div>
            <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} />
          </div>
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <Link to={`/posts/${post.id}`} className="button muted-button">
            View Post
          </Link>
          <ReactionsButton post={post} />
        </article>
      ))}
    </section>
  );
}
export default PostsList;
