import ValidatedLoginForm from "./ValidatedLoginForm";
import "./styles.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(/engie.jpg)", height: "100vh", width: "100vw",backgroundSize:"cover" }}>
      <div className="container p-4 d-flex justify-content-center">
        <div className="mt-5">
        <div className="mt-5">
        <div className="card mx-3 shadow-lg mt-5" style={{ maxWidth: "400px", justifyContent: "center" }}>
          <div className="card-body p-5">
            <ValidatedLoginForm />
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
