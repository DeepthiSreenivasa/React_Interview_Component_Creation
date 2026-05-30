import { useContext } from 'react';
import CartContext from './CartContext'

// Header.js
const Header = () => {

    const {quantity,setQuantity} = useContext(CartContext);

    return <>
        <div className="header ">
            <div>Logo</div>
            <div>Title</div>
            <div >🛒 - {quantity}</div>
        </div>
    </>
}

export default Header;
