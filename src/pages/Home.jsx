import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/thunks/productThunks';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  
  const { items, loading } = useSelector((state) => state.products || { items: [], loading: false });
  console.log("Current Items from Redux:", items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((product) => <ProductCard key={product._id} product={product} />)
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};
export default Home;