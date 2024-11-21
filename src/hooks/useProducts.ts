import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export const useProducts = (query: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = query
        ? `https://dummyjson.com/products/search?q=${query}&limit=20`
        : `https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`;
      const { data } = await axios.get(url);
      setProducts((prev) =>
        query ? data.products : [...prev, ...data.products]
      );
      setHasMore(data.products.length > 0);
    };

    fetchProducts();
  }, [page, query]);

  return { products, setPage, hasMore };
};
