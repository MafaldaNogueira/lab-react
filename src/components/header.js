import React from 'react';

function SayHello() {
    return (
        <React.Fragment>
        <div className="headerImage">
        <div className="headerTop">
        <img src="../../images/ironhack-logo.svg"/>
        <img src="../../images/menu-top.svg"/>
        </div>
        <h1>Say hello to <br/>
        ReactJS</h1>
        <p> You will learn how to use <br/>

        the most popular frontend library <br/>
        and become a super Ninja developer. </p>
        <button> Awesome!</button>
        </div>
        </React.Fragment>
    )
}

export default SayHello;