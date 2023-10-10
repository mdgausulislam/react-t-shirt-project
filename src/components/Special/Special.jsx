import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ring}) => {
    const anti=useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring:{ring}</small></p>
            <p><small>Anti:{anti}</small></p>
        </div>
    );
};

export default Special;