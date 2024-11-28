import React, {useEffect,useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
import Toast from 'react-bootstrap/Toast';
import { useMyContext } from '../context/Provider';
import Forum from './Forum';
import { getPosts } from '../context/Provider';

function Community2(){
    const {state,dispatch} = useMyContext();

    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    
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
            <Button onClick={toggleShowA} className="mb-2">
            Add Post
            </Button>
            <Toast show={showA} onClose={toggleShowA}>
            <Toast.Body>You must be logged in to add posts</Toast.Body>
            </Toast>            
            {posts}
        </div> 
    );
}

export default Community2;