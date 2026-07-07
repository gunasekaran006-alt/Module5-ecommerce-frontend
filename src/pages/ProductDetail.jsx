import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.items.find(p => p._id === id));
  
  if (!product) return <p>Product not found</p>;
  
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl">${product.price}</p>
    </div>
  );
};
export default ProductDetail;