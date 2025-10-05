import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    { id: 1, name: 'Vintage Gucci Blazer', price: '$1200', image: '/images/gucci-blazer.jpg' },
    { id: 2, name: 'Chanel Silk Dress', price: '$2200', image: '/images/chanel-dress.jpg' },
  ];

  return (
    <div>
      <h1>Welcome to the Vintage Designer Store</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
