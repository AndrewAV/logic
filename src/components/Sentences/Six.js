import React, { useState, useEffect } from 'react';


const Six = () => {
    const [A, setA] = useState("");
    const [B, setB] = useState("");

    const handleAChange = (event) => setA(event.target.value);
    const handleBChange = (event) => setB(event.target.value);

    const swap = () => {
        //Destructurin assigment does not work on hooks this way
        // [A, B] = [B, A]
        let C = A;
        setA(B);
        setB(C);
    }


    return (
        <React.Fragment>
            <h1>6. Swap two variables.</h1>
            <div>
                <label>A: </label>
                <input
                    type="text"
                    value={A}
                    placeholder="Enter A value."
                    onChange={handleAChange}
                />
            </div>
            <div>
                <label>B: </label>
                <input
                    type="text"
                    value={B}
                    placeholder="Enter B value."
                    onChange={handleBChange}
                />
            </div>
            <div>
                <label>Variables: </label>
                <h1>A={A}  B={B}</h1>
            </div>

            <button onClick={swap}>
                Swap
            </button>

        </React.Fragment>
    );
}

export default Six;