import React,{useState} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ShowIcon from '../assets/eye.svg';
import ShowOffIcon from '../assets/eye-slash.svg';
import './ValidatedLoginForm.css';
import { Link,BrowserRouter as Router,Route,Switch } from "react-router-dom";


const ValidatedLoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  }
  return(
    <Formik
    initialValues={{email:"",password:""}}
    onSubmit={(values,{setSubmitting}) => {
        console.log("Loging");
    }}
    validationSchema={Yup.object().shape({
        email: Yup.string()
          .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email non valide")
          .required("Entrez une adresse email."),
        password: Yup.string()
          .required("Entrez un mot de passe.")
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Mot de passe doit contenir : 8 caractères, une majuscule ,une minuscule ,un chiffre et un caractère spécial.")
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
      <div className="container d-flex justify-content-center">
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
                <button 
                data-testid="ButtonLogin"
                className="col-12 buttons" type="submit" disabled={isSubmitting}>
                  Login
                </button>
                <div className="links">
                  <Link  style={{ textDecoration: 'none' }} to="/ChangePassword">Redefinsser votre mot de passe</Link>
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