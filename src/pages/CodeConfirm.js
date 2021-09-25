import style from "../style/phoneConfirm.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CodeConfirm() {
    const [code, setCode] = useState();

    return (
        <div className={style.phoneconfirmContainer}>
            <Link exact to="/invite" className={style.backBtn}>
                <img src="/Images/arrow.png" alt="" />
            </Link>
            <div className="text-center">
                <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
                    Enter the code we just texted you</h1>
                <input value="367495" type="text" style={{
                    width: "100%",
                    textAlign: "center",
                    outline: "none"
                }} />
                <p className="mt-2">
                    Didn't receive it?
                    <span>Tap to resend.</span>
                </p>
            </div>
            <Link exact to="/allow_notification"
                className="primaryBtn d-flex align-items-center"
            >Next <img src="/Images/nextArrowIcon.svg" alt="" className="nextArrowIcon" /></Link>
        </div>
    );
}