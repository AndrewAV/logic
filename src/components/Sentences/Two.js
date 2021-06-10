import React, { useState, useEffect } from 'react';


const Two = () => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");

    const handleFirstChange = (event) => setFirst(event.target.value);
    const handleSecondChange = (event) => setSecond(event.target.value);

    const add = () => {
        setResult(+first + +second);
    }
    const sub = () => {
        setResult(first - second);
    }
    const mul = () => {
        setResult(first * second);
    }
    const div = () => {
        setResult(first / second);
    }


    return (
        <React.Fragment>
            <h1>2. Calculator.</h1>
            <div>
                <label>First Number: </label>
                <input
                    type="number"
                    value={first}
                    placeholder="Enter first number"
                    onChange={handleFirstChange}
                />
            </div>

            <div>
                <label>Second Number: </label>
                <input
                    type="number"
                    value={second}
                    placeholder="Enter second number"
                    onChange={handleSecondChange}
                />
            </div>
            <div>
                <button onClick={add}>
                    Add
                </button>
                <button onClick={sub}>
                    Substract
                </button>
                <button onClick={mul}>
                    Multiply
                </button>
                <button onClick={div}>
                    Divide
                </button>
            </div>
            <div>
                <h1>Result: {result}</h1>
            </div>
        </React.Fragment>
    );
}

export default Two;
