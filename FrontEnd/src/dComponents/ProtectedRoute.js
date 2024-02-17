import { Route } from "react-router-dom";
// import Login from "./Login";

function ProtectedRoute(props) 
{
    var token = window.sessionStorage.getItem("loginToken")
    if(true) {
        return <Route path={props.path} exact component={props.component}/>
    }
    else {
        return <>Yo!</>
    }
}

export default ProtectedRoute;