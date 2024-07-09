import React, {Component} from 'react';
import {IPost} from "../../models/IPosts";

interface IProps {
    posts: IPost[]
}
class PostsComponent extends Component<any, IProps> {

    constructor(props: any) {
        super(props);
    }
    componentDidMount() {// as useEffect
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) { //useEffect UseState
    }

    componentWillUnmount() { //as unsubscribe CallBack
    }
    render() {
        return (
            <div>
                {
                    this.props.posts.map((post: { id:number, title: string, body: string }) => (
                    <div key={post.id}> <h4>ID: {post.id}</h4> <p>{post.title}</p> <p>{post.body}</p></div>))
                }
            </div>
        );
    }
}

export default PostsComponent;