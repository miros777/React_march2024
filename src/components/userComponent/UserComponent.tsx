import React, {Component} from 'react';
import {IUser} from "../../models/IUser";

interface IProps {
    user: IUser
    getPosts: (id:number) => void
}

class UserComponent extends Component<IProps, {}> {

    componentDidMount() {// as useEffect

    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) { //useEffect UseState
    }

    componentWillUnmount() { //as unsubscribe CallBack
    }

    render() {
        const {id, phone, firstName} = this.props.user;
        return (
            <>
                 <div>
                     <div>
                         <b>{id} </b> <b>{firstName} </b> {phone}
                         <button onClick={() => this.props.getPosts(id)}>Show Posts</button>
                     </div>
                 </div>
            </>
        )
    }
}

export default UserComponent;