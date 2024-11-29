import{
    ADD_POST,
    SIGN_UP,
    GET_POSTS,
    SIGN_IN,
    SIGN_OUT,
    CHAT_BOT,
} from './actions';

function Reducer(state,action){
    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
            };
        case SIGN_IN:
            return{
                ...state,
                signin: true,
                email:action.payload
            };
        case SIGN_OUT:
            return{
                signin: false,
                chatBotMessages: [],
                userMessages: [],
                email: null
            };
        case ADD_POST:
            return{
                ...state,    
                posts:[...state.posts,action.payload]          
            };
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload,
            };
        case CHAT_BOT:
        return{
            ...state,
            chatBotMessages: [action.payload.chatBotMessages], 
            userMessages: [action.payload.userMessages], 
            error: [action.payload.error], 
        };
        default:
            throw new Error(`Unsopported action ${action.type}`)
    }
}

export default Reducer;