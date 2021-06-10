import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const statements = [
    ["1", "Calculate Your Salary."],
    ["2", "Calculator."],
    ["3", "Calculate Your Average Speed."],
    ["4", "Calculate The Area Of A Triangle."],
    ["5", "Calculate Your Salary On A Week."],
    ["6", "Swap two variable."],
    ["7", "Calculate The Distance Of Your Trip."],
    ["8", "Final Note."],
    ["9", "Total Points On Test."],
    ["10", "How many CD´s to back my HDD."]
]

const Menu = () => {
    return (
        <React.Fragment>
            <h1>Elija una opción:</h1>
            {statements.map(stat =>
                <Link to={`/${stat[0]}`} className="link" key={stat[0]}>
                    <Card key={stat[0]} index={stat[0]} text={stat[1]} />
                </Link>
            )}
        </React.Fragment>
    );
}

export default Menu;





