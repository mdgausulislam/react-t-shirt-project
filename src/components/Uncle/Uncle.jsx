import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money,setMoney]=useContext(MoneyContext);
    return (
        <div>
            <h1>Uncle</h1>
            <p><small>grandpa money:{money}</small></p>
            <button onClick={()=>setMoney(money+1000)}>Send Money 1000</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;