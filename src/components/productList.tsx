import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useProducts } from "../hooks/useProducts";
import ProductItem from "./productItem";

interface ProductListProps {
  query: string;
}

const ProductList: React.FC<ProductListProps> = ({ query }) => {
  const { products, setPage, hasMore } = useProducts(query);

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={() => setPage((prev) => prev + 1)}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
    >
      <div>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ProductList;
