import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useMyContext, addPost } from '../context/Provider';
import { useNavigate } from 'react-router-dom';

function Post(){
    const {dispatch} = useMyContext();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        addPost(dispatch, title, description);
        navigate('/community');
    };

    return(
    <form onSubmit={submit} id='singin'>
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Create Post</h2>
                <label className="login-label" htmlFor="username">Title</label>
                <input
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="login-input"
                    type="text"
                    id="title"
                    placeholder="Enter Title"
                    required
                />

                <label className="login-label" htmlFor="password">Description</label>
                <input
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className="login-input"
                    type="text"
                    id="Description"
                    placeholder="Enter Description"
                    required
                />

                <div className="login-buttons">
                    <Button type="button" className="cancel-button" onClick={() => navigate('/community')}>Cancel</Button>
                    <Button type="submit" className="login-button">Add Post</Button>
                </div>
            </div>
        </div>
    </form>
   );
}

export default Post;
