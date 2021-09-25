import style from "../style/roomCard.module.css";
import React, { useState, useEffect } from "react";
import { BsFillPersonFill, BsChatDotsFill } from "react-icons/bs";
import { FaRegCommentDots } from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import data from "../data/roomCard.json";

export default function RoomInfoCard(props) {
    const history = useHistory();
    const AudioFn = () => {
        history.push("/audio")
    }
    return (
        <>
            {
                data.map((item) => {
                    return (
                        <div>
                            <div>
                                <div className={style.roomCardContainer} onClick={AudioFn}>
                                    <h6>{item.title}</h6>
                                    <h2>{item.sub_title}</h2>
                                    <div className={style.roomMembers}>
                                        <div>
                                            <img src="/Images/girl2.jpg" alt="" />
                                            <img src="/Images/girl.jpg" alt="" />
                                        </div>
                                        <div>
                                            {item.members.map((person) => (
                                                <p>
                                                    {person.first_name}{person.last_name} <FaRegCommentDots />
                                                </p>
                                            ))}
                                            <p className="d-flex align-items-center">
                                                <span className="mr-2">1.8</span>
                                                <BsFillPersonFill />
                                                <span className="mx-2"></span>{" "}
                                                <span className="mr-2">5</span><BsChatDotsFill />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}