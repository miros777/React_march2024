import React, {Component} from 'react';
import UserComponent from "../userComponent/UserComponent";
import {IPost} from "../../models/IPosts";
import {IUser} from "../../models/IUser";
import PostsComponent from "../postsComponent/PostsComponent";
import {getUserPostsById, getUsers} from "../../services/apiServices/apiServices";

type MyType = {
    users: IUser[],
    posts: IPost[]
}

class UsersComponent extends Component<{}, MyType> {

    state: MyType = {
        users: [],
        posts: []
    }
    componentDidMount() {// as useEffect
        getUsers().then(value => {
                this.setState({...this.state, users: value.users})
            });
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) { //useEffect UseState
    }

    componentWillUnmount() { //as unsubscribe CallBack
    }

    getPosts = (id:number) => {
        getUserPostsById(id)
            .then(value => { this.setState({...this.state, posts: value.posts}) })
    }

    render() {
        return (
            <div>
                { this.state.users.map(user => (<UserComponent key={user.id} user={user} getPosts={this.getPosts}/>) ) }
                <PostsComponent posts={this.state.posts} />
            </div>
        );
    }
}

export default UsersComponent;