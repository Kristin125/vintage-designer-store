import products from '../data/products';
import ProductCard from '../components/ProductCard.jsx';

const Home = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;

