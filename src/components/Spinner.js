import React from 'react';
import '../assets/Spinner.css';

const Spinner = () => {

    return(
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    );
}

export default Spinner;