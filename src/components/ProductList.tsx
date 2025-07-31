import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Product[]>('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain mb-4"
          />
          <h2 className="text-lg font-semibold dark:text-white">{product.title}</h2>
          <p className="text-sm font-medium dark:text-gray-300">
            ₹ {product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
