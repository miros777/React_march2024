import React, {FC} from 'react';
import withFetch from "../../hoc/withFetch";

const PostsComponent: FC<any> = ({items}) => {

    return (
        <>
            {
                items.map((values: { id:number; title: string; body: string} ) => <div key={values.id}><h2>{values.title}</h2><p>{values.body}</p></div> )
            }
        </>
    );
}

export default withFetch(PostsComponent, '/posts');