import style from "../style/phoneConfirm.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

export default function PhoneConfirmation(props) {
    const [phonenumber, setValue] = useState();
    const numberVaild = async () => {
        if (phonenumber) {
            props.history.push("/code_confirm")
        } else {
            alert("Please enter your number");
        }

    }

    return <div className={style.phoneconfirmContainer}>
        <Link exact to="/" className={style.backBtn}>
            <img src="/Images/arrow.png" alt="" />
        </Link>
        <h1>Enter your phone</h1>
        <PhoneInput international
            defaultCountry='US'
            value={phonenumber}
            onChange={setValue}
        />
        <p>By entering your number,you're aggreing to our {" "}
            <span>Terms of Service and Privacy Policy. </span>
            Thanks!
        </p>
        <button className="primaryBtn d-flex align-items-center" onClick={numberVaild}>Next  <img src="/Images/nextArrowIcon.svg" className="nextArrowIcon" /></button>
    </div>
}