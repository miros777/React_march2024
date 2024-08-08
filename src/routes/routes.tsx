import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPageComponent from "../components/ErrorPageComponent";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";
import React from "react";
import HomePage from "../pages/HomePage";
import CommentsPage from "../pages/CommentsPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, errorElement: <ErrorPageComponent/>,

        children: [
            {index: true, element: <HomePage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id/posts', element: <UserPage/>},
            {path: 'posts/:id', element: <PostPage/>},
            {path: 'posts/:id/comments', element: <CommentsPage/>},
            {path: 'users/:id/posts/:id/comments', element: <CommentsPage/>},
            {path: 'users/:id/posts/:id', element: <PostPage/>},
        ]
    }
]);