import ReactDOM from 'react-dom/client';
import './index.css';
import UsersPage from "./pages/UsersPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CommentsPage from "./pages/CommentsPage";
import UserPage from "./pages/UserPage";
import CustomErrorLayout from "./layouts/CustomErrorLayout";
import AllPostsPage from "./pages/AllPostsPage";
import CommentsPageByPostID from "./pages/CommentsPageByPostID";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        errorElement: <CustomErrorLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id/posts', element: <UserPage/>},
            {path: 'users/:id/posts/:userId/comments', element: <CommentsPageByPostID/>},
            {path: 'posts', element: <AllPostsPage/>},
            {path: 'posts/:id/comments', element: <CommentsPageByPostID/>},
            {path: 'comments', element: <CommentsPage/>},
        ]
    }
]);

root.render(
    <RouterProvider router={router}/>
);

