// ProductCards.js

import { useContext } from 'react';
import CartContext from './CartContext'

const ProductCards = ({ productDetails }) => {

    if (!productDetails) return null;

    const { quantity , setQuantity } = useContext(CartContext);

    const { id, title, image, price } = productDetails;

    function addToCart() {
        setQuantity((prev)=>prev + 1)
    }

    return <>
        <div className="cardContainer">
            <div className="card" key={id}>
                <h6>{title}</h6>
                <img src={image} alt="Image Unavailable"></img>
                <div>₹{price}</div>
                <button className='button' onClick={addToCart} >Add To Cart</button>
            </div>
        </div>

    </>
}

export default ProductCards;
