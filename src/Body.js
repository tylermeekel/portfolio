import React from "react";

export default function Body(props){

    //JSX
    return (
        <div className="content">
            <div className="hero">
                <h3>
                    hi, i'm tyler.
                </h3>
                <p>
                    i specialize in front-end web development, with a passion for minimal design. let me <span className="toggleSide" onClick={props.toggle_sidebar}>show you around my website.</span>
                </p>
            </div>
        </div>
    )
}