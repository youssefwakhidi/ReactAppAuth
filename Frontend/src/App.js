import ValidatedLoginForm from "./components/ValidatedLoginForm";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Route,Switch,  Redirect} from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import AddUser from "./components/AddUser";
import HelloUser from "./components/HelloUser";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router >
    <div className="App">
      <Header/>
            <Switch>
              
              <Route exact path="/">
                <ValidatedLoginForm />
              </Route>
              <Route  path="/ChangePassword">
                <ChangePassword />
              </Route>
              <Route  path="/Register" component={AddUser}>
                <AddUser />
              </Route>
              <ProtectedRoute  path="/User" component={HelloUser} />
              
              <Route exact path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
