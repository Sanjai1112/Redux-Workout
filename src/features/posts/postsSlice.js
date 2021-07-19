import { createSlice, nanoid } from "@reduxjs/toolkit";
import { reactionsCount as reactions } from "../../constants/Constants";
const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    userId: "1",
    date: new Date().toISOString(),
    reactions
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text",
    userId: "2",
    date: new Date().toISOString(),
    reactions
  }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        // calls the below prepare fun 1st and get the payload and update the sate.
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        // this function is used to handle complex logic for providing value to the payload. But below one is simple.
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            userId,
            reactions
          }
        };
      }
    },
    updatePost(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    addPostReaction(state, action) {
      const { postId, reactionName } = action.payload;
      const post = state.find((post) => post.id === postId);
      if (post && post.reactions[reactionName] !== undefined) {
        console.log(post.reactions[reactionName]);
        post.reactions[reactionName]++;
      }
    }
  }
});
export const { addPost, updatePost, addPostReaction } = postsSlice.actions;
export default postsSlice.reducer;
