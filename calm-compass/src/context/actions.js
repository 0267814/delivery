export const SIGN_IN = "SIGNIN";
export const SIGN_OUT = "SIGNOUT";
export const SIGN_UP = "SIGNUP";
export const ADD_POST = "ADDPOST";
export const GET_POSTS = "GETPOSTS";
export const CHAT_BOT = "CHATBOT";

var port = { connection: "http://localhost:5000" };

if (process.env.NODE_ENV === "production") {
    port = {
        connection: "https:///",
    };
}

export var port;
