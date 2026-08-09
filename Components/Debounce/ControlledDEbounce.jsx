import { useEffect, useState, useRef } from "react";

const Debounce = ({ searchStr, onChange }) => {
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
    onChange(searchString);
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
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
};

export default Debounce;
