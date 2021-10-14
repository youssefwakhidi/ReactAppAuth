import ValidatedLoginForm from "./components/ValidatedLoginForm";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Route,Switch,  Redirect} from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import AddUser from "./components/AddUser";

function App() {
  return (
    <Router >
    <div className="App">
      <Header/>
            <Switch>
              <Route exact path="/ReactAppAuth">
                <Redirect to="/" />
              </Route>
              <Route exact path="/">
                <ValidatedLoginForm />
              </Route>
              <Route path="/ChangePassword">
                <ChangePassword />
              </Route>
              <Route path="/Register" component={AddUser}>
                <AddUser />
              </Route>
            </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
