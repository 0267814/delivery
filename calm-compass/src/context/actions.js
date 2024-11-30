export const SIGN_IN = "SIGNIN";
export const SIGN_OUT = "SIGNOUT";
export const SIGN_UP = "SIGNUP";
export const ADD_POST = "ADDPOST";
export const GET_POSTS = "GETPOSTS";
export const CHAT_BOT = "CHATBOT";

// Configuración del puerto o URL del backend
const isProduction = window.location.hostname !== "localhost"; // Detectar si no estás en local

var port = {
    connection: isProduction
        ? "https://delivery-6bl0.onrender.com" // URL del backend en producción
        : "http://localhost:5000", // URL del backend local
};

export var port;

