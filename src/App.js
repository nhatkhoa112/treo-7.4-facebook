import { Switch, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import {Homepage, FourZeroFourPage, LoginPage, SignupPage, ProfilePage} from './pages'
import ProtectedRoute from './components/ProtectRoute';

function App() {
  return (
      <div className="App">
        <Navbar />
          <Switch>
          <ProtectedRoute exact path={`/`} component={Homepage} />
          <div>
            <Route  exact path={"/login"} component={LoginPage} />
            <Route  exact path={"/signup"} component={SignupPage} />
            <Route exact path={"/:username"} component={ProfilePage} />
          </div>
          <Route exact path={"/*"} component={FourZeroFourPage} />
          </Switch>    
      </div>
  );
}

export default App;
