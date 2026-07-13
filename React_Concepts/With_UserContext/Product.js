import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [searchedProducts, setSearchedProduts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const productURL = "https://dummyjson.com/products";

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log("Into getProductDetails::");
    let data = await fetch(productURL);
    dataFromApi = await data.json();
    console.log("dataFromApi::", dataFromApi);

    setProductDetails(dataFromApi);
    setSearchedProduts(dataFromApi);
    console.log("productDetails::", productDetails);
  };

  const filterData = () => {
    let filteredItems = productDetails?.products.filter(
      (item) => item.rating > 4
    );
    console.log(filteredItems);
    setSearchedProduts({ ...searchedProducts, products: filteredItems }); //Mistake you have to send only products to the template so you have to speread the array inside an object and then add another key products and then assign filteredItems
  };

  const sortBasedOnNames = () => {
    let sortedItems = productDetails.products.sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    ); //Mistake for soring you have to always use localecompare and 2 items a,b

    setProductDetails({ ...productDetails, products: sortedItems }); //Note : Remeber this way of adding a new key to the array
    console.log("sortedItems::", sortedItems);
  };

  const reset = () => {
    getProductDetails();
  };

  const searchItems = () => {
    console.log("Search the Items");
    //let searchStr = "Powder";

    console.log("search ITems::", searchText);

    const searchResults = productDetails.products.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchedProduts({ ...searchedProducts, products: searchResults }); //Mistake: if the same state variable is used we end up searching in the search results, there for we create another state variable where we store search results
  };

  {
    return productDetails?.products?.length ? (
      <>
        <h1>This is Product Page</h1>
        <button
          onClick={() => {
            //Mistake : React uses onClick not jus click also u missed usingcamel case
            filterData();
          }}
        >
          Rating Greater than 4
        </button>
        <button
          onClick={() => {
            sortBasedOnNames();
          }}
        >
          Sort Based on Names
        </button>
        <input
          onChange={(event) => {
            //Mistake : it is onChange not onChanges
            console.log(event.target.value);
            setSearchText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            searchItems();
          }}
        >
          Search Items
        </button>
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
        <ul>
          {searchedProducts.products.map((item) => (
            <li>
              <Link to={`/ProductDetail/${item.id}`}>{item.title}</Link>
              <img src={item.images[0]} width="20px" heighr="20px"></img>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <h1>No Data Found</h1>
    );
  }
};

export default Product;
