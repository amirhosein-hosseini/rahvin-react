import React from "react";
import "./PodcastButton.css" 
import {Link} from "react-router-dom"

const PodcastButton = ({type , children , href}) => {
    return(
        <Link to={href}>
            <button className={`${type} podcastbutton`}>
                {children}
            </button>
        </Link>
    )
}

export default PodcastButton;