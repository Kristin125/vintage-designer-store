import products from '../data/products';
import ProductCard from '../components/ProductCard.jsx';

const Home = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem', padding: '1rem' }}>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default Home;

