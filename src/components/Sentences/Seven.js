import React, { useState, useEffect } from 'react';


const Seven = () => {

    const [velocity, setVelocity] = useState('');
    const [seconds, setSeconds] = useState('');
    const [distance, setTotalDistance] = useState('');

    const resetButton = () => {
        setTotalDistance();
        setVelocity("");
        setSeconds("");
    };

    function VelocityCalculatorScreen() {

        let totalDistance = (velocity * seconds);

        if (velocity < 0 || seconds < 0) {
            return "You can´t have negative numbers in here, please check it!"
        }
        if (velocity == 0 || seconds == 0) {
            return ""
        }
        if (isNaN(totalDistance) == true) {
            return ""
        }
        if (seconds==0) {
            return "Please insert seconds"
        }
        else {
            return "The car moves " + totalDistance + "m";
        }
    }





    return (
        <React.Fragment>
            <div className="BmiCalculator">
                <div>
                    <h1 className="danger topLeft">Calculate The Distance Of Your Trip</h1>
                    <h3> {VelocityCalculatorScreen()} </h3>
                </div>

                <div className="number-inputs dataNumbers">

                    <label>Velocity</label><input className="holderColor" type="number" placeholder="Velocity" value={velocity} onChange={(e) => setVelocity(e.target.value)} /> <br />
                    <label>Seconds</label><input className="holderColor" type="number" placeholder="Seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
                </div>

                <button className="btn btn-danger btnText" onClick={resetButton} >Reset</button>

            </div>
        </React.Fragment>
    );
}
export default Seven;