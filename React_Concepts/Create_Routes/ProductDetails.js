import { useParams } from "react-router-dom"; //MISTAKE comes form react router dom

const ProductDetails = () => {
  const params = useParams();

  return (
    <h1>
      This is product Details Page
      <h6>You are viewing deatils of product {params.id}</h6>
    </h1>
  );
};

export default ProductDetails;
