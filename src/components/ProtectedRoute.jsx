import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  // To get the user from the auth state in your Redux
  const { isAuthenticated } = useSelector((state) => state.auth); 

  if (!isAuthenticated) {
    // If not logged in, redirect to the login page.
    return <Navigate to="/login" />;
  }

  // Show the page only if logged in
  return children;
};

export default ProtectedRoute;