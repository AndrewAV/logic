import React, { useState, useEffect } from 'react';


const Seven = () => {

    const [velocity, setVelocity] = useState();
    const [seconds, setSeconds] = useState();
    const [distance, setTotalDistance] = useState();

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
        else {
            return "The car moves " + totalDistance + "m";
        }

        // if (0 < totalDistance < 7) {
        //     return "Your velocity is=" + totalDistance;
        // }
        // if (totalDistance >= 7 && totalDistance < 9) {
        //     return "Woo your velocity is=" + totalDistance + "that could be a new world record";
        // }
        // if (totalDistance >= 9) {
        //     return "You should do it running, the world record is 7,28m/s"
        // }
        // if (totalDistance <= 0) {
        //     return "Check your numbers"
        // }
        // if (totalDistance = { Infinity }) {
        //     return ""
        // }
        // if (isNaN(totalDistance) == true) {
        //     return ""
        // }

    }





    return (
        <React.Fragment>
            <div className="BmiCalculator">
                <div>
                    <h3> {VelocityCalculatorScreen()} </h3>
                </div>

                <div className="number-inputs">

                    Velocity<input className="holderColor" type="number" placeholder="Velocity" value={velocity} onChange={(e) => setVelocity(e.target.value)} /> <br />
                    Seconds<input className="holderColor" type="number" placeholder="Seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
                </div>

                <button className="btn btn-danger" onClick={resetButton} >Reset</button>

            </div>
        </React.Fragment>
    );
}
export default Seven;