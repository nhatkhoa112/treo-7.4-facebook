import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    if (isAuthenticated === true) {
        return <Route {...props} />;
    } else {
        return <Redirect to="/login" />;
    }
};

export default ProtectedRoute;