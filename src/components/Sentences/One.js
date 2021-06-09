import React, { useState, useEffect } from 'react';





const One = () => {

    const [pay, setPay] = useState();
    const [hours, setHours] = useState();
    const [totalSalary, setTotalSalary] = useState();

    const resetButton = () => {
        setTotalSalary();
        setPay("");
        setHours("");
    };

    function SalaryCalculatorScreen() {

        let salaryval = (pay / (hours / 100) ** 2).toFixed(1);
        //setBmi(bmival);
        if (salaryval < 5) {
            return "Please check out your dates"
        }
        if (salaryval < 18.5) {
            return "BMI=" + salaryval;
        }
        if (salaryval >= 18.5 && salaryval <= 24.9) {
            return "BMI=" + salaryval;
        }
        if (salaryval >= 25 && salaryval < 29.9) {
            return "BMI=" + salaryval;
        }
        if (salaryval >= 30 && salaryval < 35) {
            return "BMI=" + salaryval;
        }
        if (salaryval >= 35 && salaryval < 100) {
            return "BMI=" + salaryval;
        }
        if (salaryval = { Infinity }) {
            return ""
        }

    }





    return (
        <React.Fragment>
            <div className="BmiCalculator">
                <div>
                    <h3> {SalaryCalculatorScreen()} </h3>
                </div>

                <div className="number-inputs">

                    Pay<input className="holderColor" type="number" placeholder="pay" value={pay} onChange={(e) => setPay(e.target.value)} /> <br />
                    Hours<input className="holderColor" type="number" placeholder="hours" value={hours} onChange={(e) => setHours(e.target.value)} />
                </div>

                <button className="btn btn-danger" onClick={resetButton} >Reset</button>

            </div>
        </React.Fragment>
    );
}

export default One;
