import React from 'react';
import { useMyContext } from '../context/Provider';

function Forum({ title, description }) {
    const { state } = useMyContext();
    const email = state.email; 

    return (
        <div className="forum">
            <h3>{title}</h3>
            <p>{description}</p>
            <small>Posted by: {postMessage.author || 'Usuario no identificado'}</small>
        </div>
    );
}

export default Forum;
