import style from "../style/header.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className={style.Header}>
            <Link exact to="/explore">
                <img src="/Images/search.png" alt="" />
            </Link>
            <div className={style.nav_items}>
                <Link exact to="/friends_invite">
                    <img src="/Images/invite.png" alt="" />
                </Link>
                <Link exact to="/upcoming">
                    <img src="/Images/calendar.png" alt="" />
                </Link>
                <Link exact to="/activity">
                    <img src="/Images/noti.png" alt="" />
                </Link>
                <Link exact to="/profile">
                    <img src="/Images/girl.jpg" alt="" className={style.profileIcon} />
                </Link>
            </div>
        </div>
    )
}