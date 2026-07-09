
const Card = (props) => {

    console.log("Data::", props.data.products);

    if (!props?.data?.products) return <div>Loading...</div>

    return (props?.data?.products.map(item => <><div>{item.description}</div><br></br></>))
}

export default Card;
