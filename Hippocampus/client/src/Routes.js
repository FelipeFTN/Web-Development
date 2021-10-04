import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SignIn from "./SignIn"
import Header from "./Header"


const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route component={SignIn} path="/login" exact />
                <Route component={() => { return <h1>Not Found</h1> }} path="*" />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes