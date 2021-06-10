import React, { useState, useEffect } from 'react';


const Five = () => {

    const [pay, setPay] = useState('');
    const [hours, setHours] = useState('');
    const [days, setDays] = useState('');
    const [totalSalary, setTotalSalary] = useState('');

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
            return "Your salary is=" + pay * hours * days;
        }
    }





    return (
        <React.Fragment>
            <div className="BmiCalculator">
                <div>
                    <h1 className="topLeft">Calculate Your Salary On A Week</h1>
                    <h3> {SalaryCalculatorScreen()} </h3>
                </div>

                <div className="number-inputs dataNumbers">

                    <label>Hour Payment</label><input className="holderColor" type="number" placeholder="Pay" value={pay} onChange={(e) => setPay(e.target.value)} /> <br />
                    <label>Total Hours A Day</label><input className="holderColor" type="number" placeholder="Hours" value={hours} onChange={(e) => setHours(e.target.value)} />
                    <label>Days for week</label><input className="holderColor" type="number" placeholder="Days" value={days} onChange={(e) => setDays(e.target.value)} />
                </div>

                <button className="btn btn-danger btnText" onClick={resetButton} >Reset</button>

            </div>
        </React.Fragment>
    );
}

export default Five;