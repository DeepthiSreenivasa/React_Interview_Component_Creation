import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const searchText = useRef(null);

  const productUrl = useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let products = await data.json();
    setProducts(products);
    setSearchResults(products);
  };

  const getProductsRatingMoreThan4 = () => {
    let filteredProducts = products?.products?.filter(
      (item) => item.rating > 4
    );
    setSearchResults({ ...searchResults, products: filteredProducts });
  };

  const getSortedProductList = () => {
    let sortedProducts = products?.products?.sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );
    console.log("sortedProducts::", sortedProducts);
    setSearchResults({ ...searchResults, products: sortedProducts });
  };

  const searchProducts = () => {
    let searchedProducts = products?.products?.filter((item) =>
      item.title.includes(searchText.current.value)
    );
    setSearchResults({ ...searchResults, products: searchedProducts });
  };

  const reset = () => {
    getProductData();
  };

  return (
    <>
      <h1>This is Products Page</h1>
      <input ref={searchText}></input>
      <button
        onClick={() => {
          searchProducts();
        }}
      >
        GO
      </button>
      <button
        onClick={() => {
          getProductsRatingMoreThan4();
        }}
      >
        Products Rating > 4
      </button>

      <button
        onClick={() => {
          getSortedProductList();
        }}
      >
        Sort
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>

      <table>
        <tr>
          <th>Product Title</th>
          <th>Product Rating</th>
          <th>Get More Details</th>
        </tr>

        {searchResults?.products?.map((item) => (
          <tr>
            <td key={"titel" + item.id}>{item.title}</td>
            <td key={"Rating" + item.id}>{item.rating}</td>
            <td key={"View" + item.id}>
              <button
                key={"Button View" + item.id}
                onClick={() => {
                  navigate("/ProductDetails/" + item.id);
                }}
              >
                View Details
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Products;
