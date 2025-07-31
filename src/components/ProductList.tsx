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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
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
    return <div className="text-center py-8">Loading products...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition"
        >
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
          <h3 className="text-md font-semibold mb-2">{product.title}</h3>
          <p className="text-sm font-medium">
            ₹ {product.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
