import React, { useState, useEffect } from 'react';


const Nine = () => {
    const [right, setRight] = useState();
    const [wrong, setWrong] = useState();
    const [empty, setEmpty] = useState();
    const [points, setTotalPoints] = useState();

    const resetButton = () => {
        setTotalPoints();
        setRight("");
        setWrong("");
    };

    function PointsCalculatorScreen() {

        let totalPoints = (right * 4 - wrong);

        if (right < 0 || wrong < 0 || empty < 0) {
            return "You can´t have negative numbers in here, please check it!"
        }
        else {
            return "Your total points is:" + totalPoints;
        }
    }

    return (
        <React.Fragment>
            <div className="BmiCalculator">
                <div>
                    <h3> {PointsCalculatorScreen()} </h3>
                </div>

                <div className="number-inputs">

                    Right Questions<input className="holderColor" type="number" placeholder="Right Questions" value={right} onChange={(e) => setRight(e.target.value)} /> <br />
                    Wrong Questions<input className="holderColor" type="number" placeholder="Wrong Questions" value={wrong} onChange={(e) => setWrong(e.target.value)} />
                    Empty Questions<input className="holderColor" type="number" placeholder="Empty Questions" value={empty} onChange={(e) => setEmpty(e.target.value)} />
                </div>

                <button className="btn btn-danger" onClick={resetButton} >Reset</button>

            </div>
        </React.Fragment>
    );
}
export default Nine;