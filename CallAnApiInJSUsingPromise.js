import { useEffect } from 'react';

const Cart = () => {

    const cartEndPoint = "https://fakestoreapi.com/carts/1";


    useEffect(() => {
        fetch(cartEndPoint)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => { console.log("Error::", err) })
    }, [])


    return <></>


}

export default Cart;
