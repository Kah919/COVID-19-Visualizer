import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";


export default () => {
    const [ redirect, setRedirect ] = useState("");

    const redirector = event => {
        setRedirect(event.target.id)
    }

    const open = event => {
        console.log(event)
        event.target.parentNode.childNodes[1].classList.toggle('open')
    }

    const lineOpen = event => {
        console.log(event)
        event.target.parentNode.parentNode.childNodes[1].classList.toggle('open')
    }

    const renderRedirect = () => {
        return <Redirect to={`/${redirect}`}/>
    }

    return(
        <nav>
            { redirect && renderRedirect() }
            <div className="hamburger" onClick={ open }>
                <div className="line" onClick={ lineOpen }> </div>
                <div className="line" onClick={ lineOpen }> </div>
                <div className="line" onClick={ lineOpen }> </div>
            </div>
            <ul className="nav-links" onClick={ open }>
                <li id="home" onClick={ redirector }> Home </li>
                <li id="map" onClick={ redirector }> Map </li>
                <li id="faq" onClick={ redirector }> FAQs </li>
            </ul>
        </nav>
    )
}