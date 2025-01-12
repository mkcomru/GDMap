import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Here you would implement actual authentication check
    const isAuthenticated = false; // Replace with actual auth check

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;