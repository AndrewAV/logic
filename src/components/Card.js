import React, { useState, useEffect } from 'react';


const Card = (props) => {
    const { index, text } = props;

    return (
        <React.Fragment>

            <div className="card">
                <h3 className="card-header">{index}</h3>
                <div className="card-body mx-auto">
                    <h4 className="card-tittle">{text}</h4>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Card;
