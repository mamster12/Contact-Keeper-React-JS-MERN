import React from 'react';
import spinner from './spinner.gif';

const Spinner = () =>
    <div className="wrap">
        <img src={spinner} alt="Loading.." style={{ width: '200px', margin: '200px auto auto auto', display: 'block' }} />
    </div>

export default Spinner;