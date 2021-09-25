import React from "react";
import { Link } from "react-router-dom";
import style from "../style/explore.module.css";

export default function SubHeader(props) {
    return (
        <div className={style.head}>
            <Link to="/home">
                <img src="/Images/arrow.png" alt="" />
            </Link>
            <h3>{props.pageTitle}</h3>
        </div>
    )
}