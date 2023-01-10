import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./auth/login";
import Navbar from "./componens/header/header"; 

function app() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
 
export default app;