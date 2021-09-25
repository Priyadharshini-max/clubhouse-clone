import React from "react";
import style from "../style/chat.module.css";
import SubHeader from "../components/SubHeader";
import { Link, useHistory } from "react-router-dom";

export default function Chat() {
    const history = useHistory();
    const chatInside = () => {
        history.push("/privatechat");
    }
    return (
        <div className={style.chatContainer}>
            <div className={style.header}>
                <SubHeader pageTitle="BACKCHANNEL  ..." />
                <div className={style.chatDiv}>
                    <h6>Chats</h6>
                    <h6>Requests</h6>
                </div>
            </div>
            <div className={style.peopleContainer} onClick={chatInside}>
                <div className={style.chatCard}>
                    <div>
                        <img src="/Images/girl2.jpg" alt="" className={style.profile_img} />
                        <div>
                            <span>Harshini </span>  <Link to="/privatechat">
                                <img src="/Images/arrow.png" alt="" />
                            </Link>
                            <p>You: Hi</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>



    )
}