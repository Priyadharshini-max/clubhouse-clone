import React, { useState, useEffect } from "react";
import style from "../style/chat.module.css";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";


const socket = io.connect("https://clubhouse-api02.herokuapp.com/");

export default function PrivateChat() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendChat = (e) => {
        e.preventDefault();
        socket.emit("chat", { message });
        setMessage('');
    }
    useEffect(() => {
        socket.on("chat", (payload) => {
            setChat([...chat, payload])
        })
    })

    return (
        <div className={style.PrivateChathead}>
            <Link to="/chat">
                <img src="/Images/arrow.png" alt="" />
            </Link>
            <img src="/Images/girl2.jpg" alt="" className={style.userImg} />
            <h3>Harshini</h3>
            <div className={style.chatMsgs}>
                {chat.map((payload, index) => {
                    return (
                        <p key={index}>{payload.message}</p>
                    )
                })}
            </div>
            <div className={style.App_header}>
                <form>
                    <input type="text" name="chat" placeholder="Say something..." value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }} />
                    <button type="submit" onClick={sendChat}>Send</button>
                </form>
            </div>
        </div>
    )
}