import { useHistory } from "react-router-dom";
import './ValidatedLoginForm.css';

const HelloUser = () => {
    const history = useHistory();
    const lastname = localStorage.getItem("lastname");
    const firstname = localStorage.getItem("firstname");



const handleLogout = () => {
    localStorage.clear();
    history.push("/");
};
  return(
    <div className="container d-flex justify-content-center mb-5" style={{ maxWidth: "400px",  height:"350px" }}>
    <div className="card mx-3 shadow-lg mt-4 mb-4" style={{ maxWidth: "400px",justifyContent: "center", height:"150px" }}>
    <div className="card-body p-4 ">
    <div className="row justify-content-around">   
     <div className="col-12"><h5>Hello {firstname} {lastname} </h5></div>
    </div>
    <div className="row justify-content-center">
    <div className="mt-2 col-6">
    <button className="buttons" onClick={handleLogout}>
        Logout
      </button>
    </div>
    </div>

    
    
  </div>
  </div>
  </div>
)
}
export default HelloUser;