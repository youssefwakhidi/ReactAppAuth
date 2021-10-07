import ValidatedLoginForm from "./components/ValidatedLoginForm";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import ChangePassword from "./components/ChangePassword";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
            <Switch>
              <Route exact path="/">
                <ValidatedLoginForm />
              </Route>
              <Route path="/ChangePassword">
                <ChangePassword />
              </Route>
            </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
