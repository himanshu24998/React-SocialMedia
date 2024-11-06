import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./component/CreatePost.jsx";
import PostList from "./component/PostList.jsx";

const route = createBrowserRouter([
  { path: "/home", element: <App /> },
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <PostList /> }],
  },
  {
    path: "/home",
    element: <App />,
    children: [
      { path: "/home/create-post", element: <CreatePost /> },
      { path: "/home/view-post", element: <PostList /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
