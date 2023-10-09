import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please Add some products</p>
    }
    else {
        message = <div>
            <h4>Borolox</h4>
            <p>Thanks for wasting your money </p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length===1 ? 'blue':'red'}>order summary:{cart.length}</h2>
            {cart.length > 2 ? <span className='purple'>Aro kino</span>: <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length ===2 && <p>Double bonanza!!</p>
            }
        </div>
    );
};

export default Cart;


/* 
Conditional Rendering
1. use if else to set a variable that will contain an element ,components
2. ternary operator : condition ? 'for true':'false
3. logical && : (if the condition is true then the next thing will be displayed )
4. logical || :(if the condition is false then the next thing will be displayed)

*/



/* 
Conditional CSS Style



*/
