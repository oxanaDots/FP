
import { UserAuthContext } from './UserAuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { user } = UserAuthContext();

  if (user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;
