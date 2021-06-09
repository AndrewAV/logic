import React, { useState, useEffect } from 'react';
import '../Numbers.css';


const Three = () => {
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [totalVelocity, setTotalVelocity] = useState();

    const resetButton = () => {
        setTotalVelocity();
        setMinutes("");
        setSeconds("");
    };

    function VelocityCalculatorScreen() {

        let velocity = ( 1500 / (60 * minutes+ seconds));

    
        if (0 < velocity < 7) {
            return "Your velocity is=" + velocity;
        }
        if (velocity >= 7 && velocity < 9) {
            return "Wow your velocity is=" + velocity + "that could be a new world record";
        }
        if (velocity >= 9) {
            return "You should do it running, the world record is 7,28m/s"
        }
        if (velocity <= 0) {
            return "Check your numbers"
        }
        if (velocity = { Infinity }) {
            return ""
        }
        if (isNaN(velocity) == true) {
            return ""
        }

    }





    return (
        <React.Fragment>
            <div className="BmiCalculator">
                <div>
                    <h1 className="danger topLeft">Calculate Your Average Speed On 1500m</h1>
                    <h3 className="danger"> {VelocityCalculatorScreen()} </h3>
                </div>

                <div className="number-inputs dataNumbers">

                    Minutes<input className="holderColor" type="number" placeholder="Minutes" value={minutes} onChange={(e) => setMinutes(e.target.value)} /> <br />
                    Seconds<input className="holderColor" type="number" placeholder="Seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
                </div>

                <button className="btn btn-danger" onClick={resetButton} >Reset</button>

            </div>
        </React.Fragment>
    );
}

export default Three;
