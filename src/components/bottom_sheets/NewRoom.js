import React, { useState } from "react";
import style from "../../style/roomDetails.module.css";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";

export default function NewRoom(props) {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState(true);
    const card = props.cardDetail;
    return (
        <>
            <div className={style.roomDetailContainer}>
                <div className={style.head}>
                    <div className={"d-flex align-items-center"}>
                        <a href="#" onClick={() => {
                            props.setSheetVisible(false);
                        }}>
                            <img src="/Images/arrow.png" alt=""
                                className={style.arrow_icon} />
                        </a>
                        <span>Hallway</span>
                    </div>
                    <div>
                        <AiOutlineFile />
                        <img src="/Images/girl.jpg"
                            alt=""
                            className={style.profile_img} />
                    </div>
                </div>
                <div className={style.roomDetailCard}>
                    <div className='d-flex align-items-center justify-content-between flex-wrap'
                        style={{ padding: "0.5em 1em" }}
                    >
                        {
                            card.members.map((item) => (
                                <div className={style.memberContainer}>
                                    {micMuteVisible ? (
                                        <div className={style.audio_icon}>
                                            <BsMicMuteFill />
                                        </div>
                                    ) : ("")}
                                    <img src="Images/boy.jpg" alt="" />
                                    <p>
                                        <span>*</span>
                                        {item.first_name}
                                    </p>

                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={style.footer}>
                    <button onClick={() => {
                        props.setSheetVisible(false);
                    }}>
                        <img src="Images/hand-peace.png" alt="" />
                        Leave Quietly
                    </button>
                    <div>
                        <button>
                            <AiOutlinePlus />
                        </button>
                        <button>
                            <img src="Images/stopHandIcon.png" alt="" />
                        </button>
                        <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                            {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}