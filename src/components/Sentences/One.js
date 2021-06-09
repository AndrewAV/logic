import React, { useState, useEffect } from 'react';
import '../Numbers.css';





const One = () => {

    const [pay, setPay] = useState('');
    const [hours, setHours] = useState('');
    const [tax, setTax] = useState('');
    const [totalSalary, setTotalSalary] = useState('');

    const resetButton = () => {
        setTotalSalary();
        setPay("");
        setHours("");
        setTax("");
    };

    function SalaryCalculatorScreen() {

        let yourSalary = (pay * hours) * (1 - tax / 100);

        if (isNaN(yourSalary) == true) {
            return ""
        }
        if (tax < 0 || hours < 0 || pay < 0) {
            return "You can´t have negative numbers in here, please check it!"
        }
        if (tax == 0 && hours == 0 && pay == 0) {
            return ""
        }
        else if (tax >= 100) {
            return "Please check your tax"
        }
        else if (tax == 0) {
            return "Your salary is=" + ((pay * hours)).toFixed(2)
        }

        // conjuntos vacio
        // else if (tax == 0) {
        //     return "Your salary is=" + ((pay * hours)).toFixed(2)
        // }



        else {
            return "Your salary is=" + ((pay * hours) * (1 - tax / 100)).toFixed(2);
        }
    }





    return (
        <React.Fragment>
            <div className="BmiCalculator">
                <div>
                    <h1 className="danger topLeft">Calculate Your Salary</h1>
                    <h3 className="danger"> {SalaryCalculatorScreen()} </h3>
                </div>

                <div className="number-inputs dataNumbers">

                    Pay Per Hour <input className="holderColor" type="number" placeholder="Pay" value={pay} onChange={(e) => setPay(e.target.value)} /> <br />
                    Total Hours<input className="holderColor" type="number" placeholder="Hours" value={hours} onChange={(e) => setHours(e.target.value)} /> <br />
                    Tax  <input className="holderColor" type="number" placeholder="Tax" value={tax} onChange={(e) => setTax(e.target.value)} />
                </div>

                <button className="btn btn-danger" onClick={resetButton} >Reset</button>

            </div>
        </React.Fragment>
    );
}

export default One;
