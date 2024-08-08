import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redax/store";
import {commentActions} from "../redax/slices/commentSlice";
import CommentsComponent from "../components/CommentsComponent";

const CommentsPage = () => {
    let {id} = useParams();
    let dispatch = useAppDispatch();
    let comments = useAppSelector(state => state.commentStore.comments);

    useEffect(() => {
        if (id) {
            dispatch(commentActions.loadComment(+id));
        }
    }, [id]);

    return (
        <div>
            <h4>Comments Page</h4>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;