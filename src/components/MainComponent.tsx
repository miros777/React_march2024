import React from 'react';
import {useStoreCounter} from "../store/useStoreCounter";
import {useStorePosts} from "../store/useStorePosts";

const MainComponent = () => {
    let counter = useStoreCounter();
    let posts = useStorePosts();

    console.log(posts.getAllPosts());
    console.log(posts.getAllPosts());

    return (
        <div>
            {counter.counter}
        </div>
    );
};

export default MainComponent;