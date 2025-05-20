import { Navigate } from "react-router-dom";


const ProtectRoute = ({ isAuthenticated, children }) => {
  console.log("isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }
  return children;
};
export default ProtectRoute;