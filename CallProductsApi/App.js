import Card from "./Card.js"
import useProductDataHook from './ProductDataHook'



const App = () => {
    const productData = useProductDataHook();
    
    return <Card data={productData} ></Card>
}

export default App;
