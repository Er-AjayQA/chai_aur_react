import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { ProtectedRoute } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "login",
        element: (
          <ProtectedRoute authentication={false}>
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <ProtectedRoute authentication={false}>
            <Signup />
          </ProtectedRoute>
        ),
      },
      {
        path: "all-posts",
        element: (
          <ProtectedRoute authentication={true}>
            <AllPosts />
          </ProtectedRoute>
        ),
      },
      {
        path: "add-post",
        element: (
          <ProtectedRoute authentication={true}>
            <AddPost />
          </ProtectedRoute>
        ),
      },
      {
        path: "edit-posts/:id",
        element: (
          <ProtectedRoute authentication={true}>
            <EditPost />
          </ProtectedRoute>
        ),
      },
      {
        path: "post/:id",
        element: (
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
);
