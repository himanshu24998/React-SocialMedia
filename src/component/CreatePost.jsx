import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addpost } = useContext(PostList);
  const navigation = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const TagsElement = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const Tags = TagsElement.current.value.split(" ");
    addpost(userId, postTitle, postBody, Tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    TagsElement.current.value = "";
    navigation("/home/view-post");
  };

  return (
    <form className="Create-Post-form" onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User ID here:
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Post-Title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="Post-Title"
          ref={postTitleElement}
          placeholder="How are you feeling Today?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Post-Content" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="Post-Content"
          ref={postBodyElement}
          placeholder="Tell us about your day"
          rows={9}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formTags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="formTags"
          ref={TagsElement}
          placeholder="Enter tags separated by space and don't use #"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
