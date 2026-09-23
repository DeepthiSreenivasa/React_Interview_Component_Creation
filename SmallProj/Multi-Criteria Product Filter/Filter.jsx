
//Filter products by name.
import { useState } from "react";

const Filter = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
  });

  const products = [
    { id: 1, name: "iPhone", price: 80000 },
    { id: 2, name: "Laptop", price: 120000 },
    { id: 3, name: "Headphones", price: 5000 },
    { id: 4, name: "Monitor", price: 15000 },
  ];

  let filteredItems = products.filter(
    (item) =>
      item.name.includes(searchCriteria.name) &&
      item.price >= searchCriteria.minPrice &&
      item.price <= searchCriteria.maxPrice
  );

  const getSearchStr = (event) => {
    let inputStr = event.target.value;
    searchCriteriaObj = {
      name: inputStr,
      minPrice: searchCriteria.minPrice,
      maxPrice: searchCriteria.maxPrice,
    };
    setSearchCriteria(searchCriteriaObj);
  };

  return (
    <>
      <label>Search for Items</label>
      <input
        type="text"
        value={searchCriteria.name}
        onChange={($event) => getSearchStr($event)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <label>Min Price</label>
        <input
          type="number"
          value={searchCriteria.minPrice}
          onChange={($event) =>
            setSearchCriteria((prev) => {
              return { ...prev, minPrice: $event.target.value };
            })
          }
        />
      </div>
      <div>
        <label>Max Price</label>
        <input
          type="number"
          value={searchCriteria.maxPrice}
          onChange={($event) => {
            setSearchCriteria((prev) => {
              return { ...prev, maxPrice: $event.target.value };
            });
          }}
        />
      </div>
    </>
  );
};

export default Filter;
