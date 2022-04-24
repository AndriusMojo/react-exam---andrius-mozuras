import { useContext } from "react";
import { Route } from "react-router-dom"
import AuthContext from "../../store/authContext";
import NotLoggedIn from "../NotLoggedIn.jsx/NotLoggedIn";

function ProtectedRoute({children, ...rest}) {
    const authCtx = useContext(AuthContext);
  return (
    <Route {...rest} exact>
    {authCtx.isUserLoggedIn ? children : <NotLoggedIn />}
    </Route>
  )
}

export default ProtectedRoute;