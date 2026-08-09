import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fake product data
  const products = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
  }));

  const totalItems = products.length;

  // Number of pagination pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate which products belong to current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  // Page number click
  const getCurrentPage = (event) => {
    const curPage = Number(event.target.value);
    setCurrentPage(curPage);
  };

  // Next
  const getNextPage = () => {
    if (currentPage === totalPages) {
      return;
    }

    setCurrentPage((prev) => prev + 1);
  };

  // Previous
  const getPrevPage = () => {
    if (currentPage === 1) {
      return;
    }

    setCurrentPage((prev) => prev - 1);
  };

  // Items per page
  const getItemsPerPage = (event) => {
    const itemsPerPage = Number(event.target.value);

    setItemsPerPage(itemsPerPage);

    // Reset to first page when page size changes
    setCurrentPage(1);
  };

  // Generate pagination buttons
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      {/* Products */}
      <div>
        <h2>Products</h2>

        {currentProducts.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>

      <br />

      {/* Pagination */}
      <div>
        <button onClick={getPrevPage} disabled={currentPage === 1}>
          Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            value={page}
            onClick={getCurrentPage}
            style={{
              backgroundColor: currentPage === page ? "green" : "",
            }}
          >
            {page}
          </button>
        ))}

        <button onClick={getNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <br />

      {/* Items per page */}
      <div>
        Items Per Page:
        <select value={itemsPerPage} onChange={getItemsPerPage}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>

      <p>
        Page {currentPage} of {totalPages}
      </p>
    </>
  );
};

export default Pagination;
