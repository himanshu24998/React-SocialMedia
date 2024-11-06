import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-list-store";
import WelcomeMEssage from "./WelcomeMessage";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect } from "react";

const PostList = () => {
  const { postList, addIntialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  const handleOnClicked = () => {
    setFetching(true);

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addIntialPosts(data.posts);
        setFetching(false);
      });
  };

  return (
    <div className="Posts">
      {postList.length === 0 && (
        <>
          <WelcomeMEssage clicked={handleOnClicked} />
        </>
      )}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
