import { useEffect, useState, useRef } from "react";

const Debounce = () => {
  const [searchStr, setSearchStr] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchStr === "") return;

    const controller = new AbortController();

    let timer = setTimeout(() => {
      getProducts(controller);
    }, 200);

    return () => {
      clearTimeout(timer), controller.abort();
    };
  }, [searchStr]);

  const getProducts = (controller) => {
    fetch("https://dummyjson.com/products/search?q=" + searchStr, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setFilteredProducts((prev) => (prev = [...data.products]));
      })
      .catch((err) => console.log("Err::", err));
  };

  const getSearchString = (event) => {
    let searchString = event.target.value;
    setSearchStr(searchString);
  };

  return (
    <>
      <input
        type="text"
        value={searchStr}
        onChange={($event) => getSearchString($event)}
      />
      <div>
        {filteredProducts.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </>
  );
};

export default Debounce;
