import ValidatedLoginForm from "./components/ValidatedLoginForm";
import "./styles.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container p-4 d-flex justify-content-center">
        <div className="card mx-3 shadow-lg mt-3" style={{ maxWidth: "400px", justifyContent: "center" }}>
          <div className="card-body p-5">
            <ValidatedLoginForm />
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
