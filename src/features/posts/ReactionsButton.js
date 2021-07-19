import React from "react";
import { useDispatch } from "react-redux";
import { addPostReaction } from "./postsSlice";
import { reactionEmojis } from "../../constants/Constants";

function ReactionsButton({ post }) {
  const dispatch = useDispatch();
  const handleEmojiReaction = (e) => {
    dispatch(addPostReaction({ postId: post.id, reactionName: e.target.name }));
  };
  const reactions = Object.entries(reactionEmojis).map(([name, emoji]) => {
    return (
      <button
        key={name}
        name={name}
        className="muted-button reaction-button"
        onClick={handleEmojiReaction}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactions}</div>;
}

export default ReactionsButton;
