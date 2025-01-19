import { Navigate } from 'react-router-dom';
import { useAuth } from '../../components/context/AuthContext';
import { PropTypes } from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default ProtectedRoute;