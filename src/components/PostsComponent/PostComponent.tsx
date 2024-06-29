import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface IProps {
    posts: IPost[]
}

const PostComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(v => (<div key={v.id}>
                            <div>id: {v.id}</div>
                            <div>title: {v.title}</div>
                            <div>body: {v.body}</div>
                            <div>tags: {v.tags}</div>
                            <div>likes: {v.reactions.likes} dislikes: {v.reactions.dislikes}</div>
                            <hr/>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default PostComponent;