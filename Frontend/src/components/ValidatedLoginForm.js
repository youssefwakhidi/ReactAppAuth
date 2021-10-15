import React,{useState} from "react";
import { Formik  } from "formik";
import * as Yup from "yup";
import ShowIcon from '../assets/eye.svg';
import ShowOffIcon from '../assets/eye-slash.svg';
import './ValidatedLoginForm.css';
import { useHistory,Link,BrowserRouter as Router,Route,Switch } from "react-router-dom";
import UserService from "../services/UserService";



const ValidatedLoginForm = () => {
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  }
  return(
    <Formik
    initialValues={{email:"",password:""}}
    onSubmit={(values,{setSubmitting}) => {
    UserService.getUsers().then(res =>
        {
          (res.data).map(user => 
            {
              if(user.email==values.email && user.password==values.password)
              {
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("lastname",user.lastname);
                localStorage.setItem("firstname",user.firstname);
                history.push("/User");
              }
            }
            );
        });
       
      alert('Utilisateur non trouvable !! ' )


    }}
    validationSchema={Yup.object().shape({
        email: Yup.string()
          .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email non valide")
          .required("Entrez une adresse email."),
        password: Yup.string()
          .required("Entrez un mot de passe.")
      })}
    >

    {props => {

      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
      <div className="container d-flex justify-content-center mb-5">
        <div className="card mx-3 shadow-lg mt-4 mb-4" style={{ maxWidth: "400px", justifyContent: "center" }}>
          <div className="card-body p-4">
              <form data-testid="Form" onSubmit={handleSubmit}>
                <label 
                data-testid="LabelEmail"
                className="labels" htmlFor="email">Adresse Email</label>
                <input
                  name="email"
                  type="text"
                  data-testid="InputEmail"
                  placeholder="Entrez votre adresse email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                  className="focus"
                />
                {errors.email && touched.email && (
                  <div 
                  data-testid="FeedBackEmail"
                  className="input-feedback">{errors.email}</div>
                )}
                <label 
                data-testid="LabelPassword"
                className="labels" htmlFor="password">Mot de passe</label>
                <div className="input-group">
                <input
                  name="password"
                  data-testid="Inputpassword"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Entrez votre mot de passe"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && "error"}
                  className="focus col-10"
                />
                <button 
                  data-testid="ButtonEye"
                  type="button"
                  className="buttonPad col-2 mobile-space" style={{marginBottom:"20px",backgroundColor:"#ffffff"}}
                  onClick={togglePasswordVisiblity}
                >
                              {passwordShown ? <img src={ShowIcon}/> :<img src={ShowOffIcon}/>}
                </button>
                </div>
                {errors.password && touched.password && (
                  <div 
                  data-testid="FeedBackPassword"
                  className="input-feedback">{errors.password}</div>
                )}
                <div className="row justify-content-around">
                <button 
                data-testid="ButtonLogin"
                name="sub"
                className="col-5 buttons" type="submit">
                  Login
                </button>
                <div 
                data-testid="ButtonRegister"
                className="col-5 links btn-secondary">
                  <Link  style={{ textDecoration: 'none',color:"white" }} to="/Register">
                  Register
                  </Link>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }}
  </Formik>
  );

};

export default ValidatedLoginForm;