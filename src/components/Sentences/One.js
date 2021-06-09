import React, { useState, useEffect } from 'react';





const One = () => {

    const [pay, setPay] = useState();
    const [hours, setHours] = useState();
    const [tax, setTax] = useState();
    const [totalSalary, setTotalSalary] = useState();

    const resetButton = () => {
        setTotalSalary();
        setPay("");
        setHours("");
        setTax("");
    };

    function SalaryCalculatorScreen() {
        if (tax < 0 || hours < 0 || pay < 0) {
            return "You can´t have negative numbers in here, please check it!"
        }
        else if (tax >= 100) {
            return "Please check your tax"
        }
        else if (tax == 0) {
            return "Your salary is=" + (pay * hours);
        }
        else {
            return "Your salary is=" + (pay * hours) * (1 - tax / 100);
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
                    Tax<input className="holderColor" type="number" placeholder="Tax" value={tax} onChange={(e) => setTax(e.target.value)} />
                </div>

                <button className="btn btn-danger" onClick={resetButton} >Reset</button>

            </div>
        </React.Fragment>
    );
}

export default One;
