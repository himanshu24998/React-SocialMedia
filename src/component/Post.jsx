import { MdDelete } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { useContext } from "react";
import { PostList } from "../Store/Post-list-store";

const Post = ({ post }) => {
  const { deletepost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletepost(post.id)}
          >
            <div className="Delete-button">{<MdDelete />}</div>
          </span>
        </h5>
        <p className="card-text">{post.content}</p>
        <div className="tags">
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-info tags">
              #{tag}
            </span>
          ))}
        </div>
        <a href="#" className="btn btn-primary reaction-button">
          {post.reaction} <BiLike className="like" />
        </a>
      </div>
    </div>
  );
};

export default Post;
