import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Employee from './components/Employee/Employee';
import NotFound from './components/NotFound/NotFound';
import SingleEmployee from './components/SingleEmployee/SingleEmployee';
import Menubar from './components/Menubar/Menubar';



function App() {
  return (
    <div>
      <Router>
        <Menubar />
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/employee">
            <Employee></Employee>
          </Route>
          <Route exact path="/Employee/:id">
            <SingleEmployee></SingleEmployee>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
