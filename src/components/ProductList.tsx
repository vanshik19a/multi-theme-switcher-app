import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data as Product[]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-black dark:text-white">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
       <div
  key={product.id}
  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 transition hover:shadow-lg hover:scale-[1.02] duration-200"
>
  <img
    src={product.image}
    alt={product.title}
    className="h-48 w-full object-contain mb-4"
  />
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
    {product.title}
  </h3>
  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
    {product.category}
  </p>
  <p className="text-xl font-bold text-green-600 dark:text-green-400">
    ₹{(product.price * 83).toFixed(0)}
  </p>
</div>

      ))}
    </div>
  );
};

export default ProductList;
