import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  // Retrieve items from the cart state
  const { items } = useSelector((state) => state.cart || { items: [] });
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // If you refresh the page after logging out, the cart and state will be reset.
    window.location.reload(); 
  };

  return (
    <nav style={{ padding: '10px', background: '#eee', display: 'flex', gap: '15px' }}>
      <Link to="/">Home</Link> 
      
      {/* The cart will be displayed only if you are logged in. */}
      {isAuthenticated && (
        <Link to="/cart">
          Cart ({items ? items.length : 0})
        </Link>
      )}
      
      {isAuthenticated ? (
        <button onClick={handleLogout} style={{ cursor: 'pointer' }}>
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;