import React, { useState, useEffect } from 'react';


const Ten = () => {
    const CDSize = 700;
    const megabyte = 1024;
    const [hardDrive, setHardDrive] = useState("");


    const handleHardDriveChange = (event) => setHardDrive(event.target.value);


    const calculateCD = () => {
        const HDDInBytes = hardDrive * megabyte;
        const necesaryCDs = HDDInBytes / CDSize;
        if (hardDrive != "") {
            return (`Space needed: ${HDDInBytes}Mb. \n
                Required CDs for the backup: ${Math.ceil(necesaryCDs)}`)
        }

    }



    return (
        <React.Fragment>
            <h1>10. How many 700Mb CD's to backup my HDD.</h1>
            <div className="dataNumbers">
                <label>Total hard drive space in GB: </label>
                <input
                    type="number"
                    value={hardDrive}
                    placeholder="Enter the total hard drive space in GB."
                    onChange={handleHardDriveChange}
                />
            </div>
            <div>
                <h1>{calculateCD()}</h1>
            </div>
        </React.Fragment>
    );
}

export default Ten;
