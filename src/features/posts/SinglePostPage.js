import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "../users/PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButton from "./ReactionsButton";

function SinglePostPage({ match }) {
  const { postId } = match.params;
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <Link to={`/posts/edit/${post.id}`} className="button muted-button">
          Edit Post
        </Link>
        <ReactionsButton post={post} />
      </article>
    </section>
  );
}
export default SinglePostPage;
