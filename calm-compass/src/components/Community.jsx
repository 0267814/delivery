import React, {useEffect} from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../context/Provider';
import Forum from './Forum';
import { getPosts } from '../context/Provider';

function Community(){
    const {state,dispatch} = useMyContext();
    const navigate = useNavigate();

    useEffect(() => {
        getPosts(dispatch);
    }, [dispatch]);

    const posts = state.posts?.length ? (
        state.posts.map((post) => (
            <Forum
                title={post.title}
                description={post.description}
            />
        ))
    ) : (
        <h2>No posts to display</h2>
    );

    return(
        <div className="content-box">
            <Button onClick={() => navigate('/post')} name="button_forum" className="btn">Add Post</Button>
            {posts}
        </div> 
    );
}

export default Community;