import ValidatedLoginForm from "./components/ValidatedLoginForm";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container d-flex justify-content-center">
        <div className="card mx-3 shadow-lg mt-4 mb-4" style={{ maxWidth: "400px", justifyContent: "center" }}>
          <div className="card-body p-4">
            <ValidatedLoginForm />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
  );
}

export default App;
