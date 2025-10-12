import ProductCard from '../components/ProductCard.jsx';
import products from '../data/products.js';

const Home = () => {
  return (
    <div className="container">
      <h1>Our Collection</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

