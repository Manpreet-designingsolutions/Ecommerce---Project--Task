import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, userType, roles }) =>
{
    const navigate = useNavigate();
    return roles.includes(userType) ? children : navigate("/");
  
}

export default ProtectedRoute;
