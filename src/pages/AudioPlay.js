import React from "react";
import { Link } from "react-router-dom";
import song from "../audio/Ethir-Neechal.mp3";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";

export default class Music extends React.Component {

    componentDidMount = async () => {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        await audioEl.play();
    }
    render() {
        return (
            <div>
                <div className={style.profileContainer}>
                    <div className={exploreStyle.header}>
                        <div className={`${exploreStyle.head} text-end mb-0`}>
                            <Link to="/home">
                                <img src="/Images/arrow.png" alt="" className={exploreStyle.arrow_icon} />
                            </Link>

                        </div>
                    </div>
                    <img src="/Images/girl.jpg" alt="" className={style.profile_image} />
                    <h4>Priya</h4>
                    <img src="/Images/girl2.jpg" alt="" className={style.profile_image} />
                    <h4>Hazee</h4>
                </div>
                <audio className="audio-element">
                    <source src={song}></source>
                </audio>

            </div>
        )
    }
}

