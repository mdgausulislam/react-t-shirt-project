import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children,hasFriend}) => {
    return (
        <div>
            <h5>Cousin</h5>
            <p><small>{children}</small></p>
            <Friend></Friend>
        </div>
    );
};

export default Cousin;