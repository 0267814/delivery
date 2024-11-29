import React, {createContext, useContext, useReducer,useEffect} from 'react';
import Reducer from './Reducer.jsx';
import { ADD_POST, SIGN_UP,SIGN_IN, SIGN_OUT, CHAT_BOT, port } from './actions';
import api from '../utils/api';
import axios from 'axios';


const Context = createContext();

function Provider({children}){
    const initialState = {
        signin: false,
        posts: [],
        chatBotMessages: [],
        userMessages: [],
        email: null,
    }
    
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
        const storedState = JSON.parse(localStorage.getItem('appState'));
        
        if (storedState && storedState.email) {
            dispatch({ type: SIGN_IN, payload: storedState.email });
        }
      }, []);
    
      useEffect(() => {
        if (state.signin) {
          localStorage.setItem('appState', JSON.stringify(state));
        } else {
          localStorage.removeItem('appState');
        }
      }, [state]);

    return(
        <Context.Provider value = {{state, dispatch}}>
            {children}
        </Context.Provider>
    );
}

function useMyContext(){
    return useContext(Context);
}

async function signUp(dispatch,email,password,setError){
    try{
        await api.post(`${port.connection}/signUp`,{ email, password });
        dispatch({
                type: SIGN_UP,
            });
                        
    } catch(err){
        setError('Email already in use');
    }

}

async function signIn(dispatch, email, password, setError) {
    try {
        const res = await axios.post(`${port.connection}/signIn`, { email, password });

        dispatch({
            type: SIGN_IN,
            payload: email,
        });

        localStorage.setItem('appState', JSON.stringify({ name: res.data.name, signin: true, email }));
    } catch (err) {
        setError('Email or password is incorrect');
    }
}

async function signOut(dispatch){
    try{
        dispatch({
            type: SIGN_OUT,
        });
    
    } catch(err){
        console.log(err);
    }
}

async function addPost(dispatch,title,description,name){
    try{
        const res = await api.post(`${port.connection}/addPost`,{title,description,name});
          
        dispatch({
                type: ADD_POST,
                payload: res.data.name
            });
                        
    } catch(err){
        console.log(err)
    }
}

async function getPosts(dispatch){
    try{

        const res = await fetch(`${port.connection}/posts`);

        const data = await res.json();
        dispatch({
            type: 'GETPOSTS',
            payload: data
        }); 
                        
    } catch(err){
        console.log("Error");
    }
}

async function changePassword(dispatch,password,confirm,email,setError){
    try{
        await api.post(`${port.connection}/changePassword`,{password,confirm,email});
        
        dispatch({
            type: SIGN_OUT,
        }); 
                        
    } catch(err){
        setError("Passwords do not match");
    }
}

async function chatBot(dispatch,message){
    try{
        const res = await api.post(`${port.connection}/chatBot`,{message});
        const { chatBotMessages, userMessages, error } = res.data;

        dispatch({
            type: CHAT_BOT,
            payload: { chatBotMessages, userMessages, error }
        }); 
                        
    } catch(err){
        console.log("Error");
    }
}

export default Provider;
export {useMyContext,signUp,addPost,getPosts,signIn,signOut,chatBot,changePassword};