import { Switch, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import {Homepage, FourZeroFourPage, LoginPage, SignupPage} from './pages'
import ProtectedRoute from './components/ProtectRoute';

function App() {
  return (
      <div className="App">
        <Navbar />
          <Switch>
          <ProtectedRoute exact path={`/`} component={Homepage} />
          <div className="container">
            <Route  exact path={"/login"} component={LoginPage} />
            <Route  exact path={"/signup"} component={SignupPage} />
          </div>
          <Route exact path={"/*"} component={FourZeroFourPage} />
          </Switch>    
      </div>
  );
}

export default App;
