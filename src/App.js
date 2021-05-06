import { Switch, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import {Homepage, FourZeroFourPage, LoginPage, SignupPage} from './pages'
import ProtectedRoute from './components/ProtectRoute';

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
          <ProtectedRoute exact path={`/`} component={Homepage} />
          <Route  exact path={"/login"} component={LoginPage} />
          <Route  exact path={"/signup"} component={SignupPage} />
          <Route exact path={"/*"} component={FourZeroFourPage} />
          </Switch>    
        </div>
      </div>
  );
}

export default App;
