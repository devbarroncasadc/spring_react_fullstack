import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { AuthProvider } from "./context/authContext";
import Home from './Pages/Home';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route component={Home} exact path="/"></Route>
          <Route component={Login} exact path="/login"></Route>
          <Route component={Register} exact path="/register"></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
