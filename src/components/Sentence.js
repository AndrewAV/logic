import React, { useState, useEffect } from 'react';
import One from './Sentences/One';
import Two from './Sentences/Two';
import Three from './Sentences/Three';
import Four from './Sentences/Four';
import Five from './Sentences/Five';
import Six from './Sentences/Six';
import Seven from './Sentences/Seven';
import Eight from './Sentences/Eight';
import Nine from './Sentences/Nine';
import Ten from './Sentences/Ten';


const Sentence = (props) => {
    const { index } = props.match.params;
    if (index==="1") {
        return (
            <React.Fragment>
                <One/>
            </React.Fragment>
        );
    } else if (index==="2") {
        return (
            <React.Fragment>
                <Two/>
            </React.Fragment>
        );
    } else if (index==="3") {
        return (
            <React.Fragment>
                <Three/>
            </React.Fragment>
        );
    } else if (index==="4") {
        return (
            <React.Fragment>
                <Four/>
            </React.Fragment>
        );
    } else if (index==="5") {
        return (
            <React.Fragment>
                <Five/>
            </React.Fragment>
        );
    } else if (index==="6") {
        return (
            <React.Fragment>
                <Six/>
            </React.Fragment>
        );
    } else if (index==="7") {
        return (
            <React.Fragment>
                <Seven/>
            </React.Fragment>
        );
    } else if (index==="8") {
        return (
            <React.Fragment>
                <Eight/>
            </React.Fragment>
        );
    } else if (index==="9") {
        return (
            <React.Fragment>
                <Nine/>
            </React.Fragment>
        );
    } else if (index==="10") {
        return (
            <React.Fragment>
                <Ten/>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1>Page not found...</h1>
            </React.Fragment>
        );
    }
}

export default Sentence;
