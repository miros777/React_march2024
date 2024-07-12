import ReactDOM from 'react-dom/client';
import './index.css';
import UsersPage from "./pages/UsersPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import CommentPage from "./pages/CommentPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/:id', element: <PostPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'comments/:id', element: <CommentPage/>},
        ]
    }
]);

root.render(
    <RouterProvider router={router}/>
);

