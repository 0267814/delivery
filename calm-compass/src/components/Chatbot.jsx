import React, { useState } from 'react';
import { useMyContext, chatBot } from '../context/Provider';

function Chatbot() {
    const { state, dispatch } = useMyContext();
    const [message, setMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        chatBot(dispatch, message);
        setMessage(""); // Limpia el input después de enviar
    };

    // Combinar mensajes de usuario y bot en un solo array ordenado
    const combinedMessages = [];
    state.userMessages.forEach((userMsg, index) => {
        combinedMessages.push({ type: "user", text: userMsg });

        if (state.chatBotMessages[index]) {
            combinedMessages.push({ type: "bot", text: state.chatBotMessages[index] });
        }
    });

    return (

        <div>
            <h1><b>Say hi to Amadeus!!!</b></h1>

        <div className="chat_bot_container">
            <div className="chat_bot_content_box">
                <div className="chat_bot_scrolleables_container">

                    {combinedMessages.map((msg, index) => (
                        <div key={`message-${index}`} className="chat_bubble_container">
                            <div className={msg.type === "user" ? "chat_bot_user_bubble" : "chat_bot_bubble"}>
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
                <div className="chat_bot_input_container">
                    <form onSubmit={submit}>
                        <input
                            type="text"
                            className="chat_bot_input_box_text"
                            name="message"
                            placeholder="Message"
                            autoFocus
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit" className="chat_bot_input_box_button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
