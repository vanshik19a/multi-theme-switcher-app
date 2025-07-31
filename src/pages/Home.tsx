import React from 'react';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Home</h2>
      <ProductList />
    </div>
  );
};

export default Home;
