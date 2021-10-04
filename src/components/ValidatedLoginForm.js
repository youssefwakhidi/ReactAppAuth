import React,{useState} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
//import ShowIcon from "@material-ui/icons/Visibility"
//import ShowOffIcon from "@material-ui/icons/VisibilityOff"
import ShowIcon from '../assets/eye.svg';
import ShowOffIcon from '../assets/eye-slash.svg';

import './ValidatedLoginForm.css';


const ValidatedLoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  }
  return(
    <Formik
    initialValues={{email:"",password:""}}
    onSubmit={(values,{setSubmitting}) => {
        console.log("Submission");
    }}
    validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email non valide")
          .required("Entrez une adresse email."),
        password: Yup.string()
          .required("Entrez un mot de passe.")
          .matches(/(?=.*[0-9])/, "Mot de passe non sécurisé.")
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

        <form onSubmit={handleSubmit}>
          <label className="labels" htmlFor="email">Adresse Email</label>
          <input
            name="email"
            type="text"
            placeholder="Entrez votre adresse email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
            className="focus"
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label className="labels" htmlFor="password">Mot de passe</label>
          <div className="input-group">
          <input
            name="password"
            type={passwordShown ? "text" : "password"}
            placeholder="Entrez votre mot de passe"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
            className="focus col-10"
          />
          <button 
            className="buttonPad col-2 mobile-space" style={{marginBottom:"20px",backgroundColor:"#ffffff"}}
            onClick={togglePasswordVisiblity}
          >
                        {passwordShown ? <img src={ShowIcon}/> :<img src={ShowOffIcon}/>}
          </button>
          </div>
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button className="buttons" type="submit" disabled={isSubmitting}>
            Login
          </button>
    
        </form>
      );
    }}
  </Formik>
  );

};

export default ValidatedLoginForm;