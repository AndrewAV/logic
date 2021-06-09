import React, { useState, useEffect } from 'react';


const Five = () => {

    const [pay, setPay] = useState();
    const [hours, setHours] = useState();
    const [days, setDays] = useState();
    const [totalSalary, setTotalSalary] = useState();

    const resetButton = () => {
        setTotalSalary();
        setPay("");
        setHours("");
        setDays("");
    };

    function SalaryCalculatorScreen() {
        if (days < 0 || hours < 0 || pay < 0) {
            return "You can´t have negative numbers in here, please check it!"
        }
        else {
            return "Your salary is=" + pay * hours * days ;
        }
    }





    return (
        <React.Fragment>
            <div className="BmiCalculator">
                <div>
                    <h3> {SalaryCalculatorScreen()} </h3>
                </div>

                <div className="number-inputs">

                    Pay<input className="holderColor" type="number" placeholder="Pay" value={pay} onChange={(e) => setPay(e.target.value)} /> <br />
                    Hours<input className="holderColor" type="number" placeholder="Hours" value={hours} onChange={(e) => setHours(e.target.value)} />
                    Days<input className="holderColor" type="number" placeholder="Days" value={days} onChange={(e) => setDays(e.target.value)} />
                </div>

                <button className="btn btn-danger" onClick={resetButton} >Reset</button>

            </div>
        </React.Fragment>
    );
}

export default Five;