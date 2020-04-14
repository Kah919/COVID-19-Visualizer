import React from 'react';

export default () => {
    const open = event => {
        console.log(event)
        event.target.parentNode.childNodes[1].classList.toggle('open')
    }

    const lineOpen = event => {
        console.log(event)
        event.target.parentNode.parentNode.childNodes[1].classList.toggle('open')
    }

    return(
        <nav>
            <div className="hamburger" onClick={ open }>
                <div className="line" onClick={ lineOpen }> </div>
                <div className="line" onClick={ lineOpen }> </div>
                <div className="line" onClick={ lineOpen }> </div>
            </div>
            <ul className="nav-links" onClick={ open }>
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Map </a></li>
                <li><a href="#"> FAQs </a></li>
            </ul>
        </nav>
    )
}