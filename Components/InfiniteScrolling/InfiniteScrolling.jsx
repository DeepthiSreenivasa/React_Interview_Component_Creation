import { useState, useEffect, useRef } from "react";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [skipData, setSkipData] = useState(0);
  const [loading, setLaoding] = useState(false);
  const observerRef = useRef(null);
  const loadingRef = useRef(false);
  const [hasMore, setHasMore] = useState(true);
  const hasMoreRef = useRef(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        !loadingRef.current &&
        hasMoreRef.current
      ) {
        loadMoreData();
      }
    });

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    fetchDetails();
  }, [skipData]);

  const fetchDetails = () => {
    setLaoding(true);
    loadingRef.current = true;
    fetch(`https://dummyjson.com/products?limit=20&skip=` + skipData)
      .then((res) => res.json())
      .then((data) => {
        if (data.products.length == 0) {
          setHasMore(false);
          hasMoreRef.current = false;
          return;
        }
        setProducts((prev) => [...prev, ...data.products]);
      })
      .finally(() => {
        setLaoding(false);
        loadingRef.current = false;
      });
  };

  const loadMoreData = () => {
    setSkipData((prev) => prev + 20);
  };

  return (
    <>
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
      <div ref={observerRef}>{loading ? "Loading..." : "Scroll for more"}</div>
    </>
  );
};

export default InfiniteScroll;
