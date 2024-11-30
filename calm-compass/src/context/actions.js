export const SIGN_IN = "SIGNIN";
export const SIGN_OUT = "SIGNOUT";
export const SIGN_UP = "SIGNUP";
export const ADD_POST = "ADDPOST";
export const GET_POSTS = "GETPOSTS";
export const CHAT_BOT = "CHATBOT";

// Configuración del puerto o URL del backend
var port = { connection: "http://localhost:5000" }; // Desarrollo local

// Cambiar la conexión para producción
if (process.env.NODE_ENV === "production") {
    port = {
        connection: "https://delivery-6bl0.onrender.com",
    };
}

export var port;

