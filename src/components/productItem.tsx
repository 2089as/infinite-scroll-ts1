import React from "react";

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} USD</p>
    </div>
  );
};

export default ProductItem;
