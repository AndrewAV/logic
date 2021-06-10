import React, { useState, useEffect } from 'react';


const Eight = () => {
    const [firstGrade, setFirstGrade] = useState("");
    const [secondGrade, setSecondGrade] = useState("");
    const [thirdGrade, setThirdGrade] = useState("");

    const handleFirstGradeChange = (event) => setFirstGrade(event.target.value);
    const handleSecondGradeChange = (event) => setSecondGrade(event.target.value);
    const handleThirdGradeChange = (event) => setThirdGrade(event.target.value);



    return (
        <React.Fragment>
            <h1>8. Final Note..</h1>
            <div>
                <label>First grade: </label>
                <input
                    type="number"
                    value={firstGrade}
                    placeholder="Enter the first grade."
                    onChange={handleFirstGradeChange}
                />
            </div>
            <div>
                <label>Second grade: </label>
                <input
                    type="number"
                    value={secondGrade}
                    placeholder="Enter the second grade."
                    onChange={handleSecondGradeChange}
                />
            </div>
            <div>
                <label>Third grade: </label>
                <input
                    type="number"
                    value={thirdGrade}
                    placeholder="Enter the third grade."
                    onChange={handleThirdGradeChange}
                />
            </div>

            <div>
                <h1>Average: {(+firstGrade + +secondGrade + +thirdGrade) / 3}</h1>
            </div>

        </React.Fragment>
    );
}

export default Eight;