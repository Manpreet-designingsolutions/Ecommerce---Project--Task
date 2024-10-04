import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ children, userType, roles }) => {
    const navigate = useNavigate();

    // Define default paths for each user type
    const redirectPaths = {
        admin: '/add',
        seller: '/productspage',
        customer: '/productlisting',
    };

    useEffect(() => {
        if (!roles.includes(userType)) {
            // Redirect to the appropriate path based on user type
            navigate(redirectPaths[userType] || '/login');
        }
    }, [navigate, roles, userType]);

    return roles.includes(userType) ? children : null; // Render children only if authorized
}

export default ProtectedRoute;

