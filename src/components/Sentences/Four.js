import React, { useState, useEffect } from 'react';


const Four = () => {
    const [base, setBase] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("");

    const handleBaseChange = (event) => setBase(event.target.value);
    const handleHeightChange = (event) => setHeight(event.target.value);

    const calculate = () => {
        setResult((base*height)/2);
    }

    return (
        <React.Fragment>
            <h1>4. Calcular la superficie de un triangulo.</h1>
            <div>
                <label>Base: </label>
                <input
                    type="number"
                    value={base}
                    placeholder="Enter triangle base"
                    onChange={handleBaseChange}
                />
            </div>

            <div>
                <label>Height: </label>
                <input
                    type="number"
                    value={height}
                    placeholder="Enter triangle height."
                    onChange={handleHeightChange}
                />
            </div>
            <div>
                <button onClick={calculate}>
                    Calculate area.
                </button>
            </div>
            <div>
                <h1>Result: {result}</h1>
            </div>


        </React.Fragment>
    );
}

export default Four;