import React from "react";

export default class Music extends React.Component {

    componentDidMount = async () => {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        await audioEl.play();
    }
    render() {
        return (
            <div>
                <audio className="audio-element">
                    <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
                </audio>
            </div>
        )
    }
}

