import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  addIntialPosts: () => {},
  deletepost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addpost = (userId, postTitle, postBody, Tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        content: postBody,
        reaction: 0,
        userid: userId,
        tags: Tags,
      },
    });
  };

  const addIntialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletepost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostList.Provider
      value={{ postList, addpost, addIntialPosts, deletepost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
