import React from 'react';

function Footer() {
    return (
        <React.Fragment>
        <div className="container">
        <div className="row">
        <div class="col-sm-3">
        <img src="../../images/icon1.png"/>
        <h3> Declarative</h3>
        <p> React makes it painless to create interactive UIs</p>
        </div>
        <div class="col-sm-3">
        <img src="../../images/icon2.png"/>
        <h3> Components</h3>
        <p> Build encapsulated components that manage their state</p>
        </div>
        <div class="col-sm-3">
        <img src="../../images/icon3.png"/>
        <h3> Single-Way</h3>
        <p> A set of immutable values are passed to the components</p>
        </div>
        <div class="col-sm-3">
        <img src="../../images/icon4.png"/>
        <h3> JSX</h3>
        <p> Staticly-typed, designed to run on modern browsers</p>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Footer;