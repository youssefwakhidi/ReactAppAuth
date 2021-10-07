import React,{useState} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ShowIcon from '../assets/eye.svg';
import ShowOffIcon from '../assets/eye-slash.svg';
import './ChangePassword.css';
import PasswordStrength from "./PasswordStrength";
const isnumberRegex =/\d/;
const nospace =/^\S*$/;

const specialcharacterRegex =/[!@#\$%\^&\*]/;
const MajMinRegex = /(?=.*[a-z])(?=.*[A-Z])/;
const ChangePassword =()=>
{
    const [password,setPassword]=useState("");
    const [passwordValidity, setpasswordValidity] = useState({
        minChar:null,
        number:null,
        Uppercase:null,
        specialChar:null
    });
    const onChangePassword = password =>
    {
        setPassword(password);
        setpasswordValidity({
            minChar:((password.length >= 8 && password.length <= 20) && nospace.test(password) )  ? true : false,
            number : isnumberRegex.test(password) ? true : false,
            Uppercase: MajMinRegex.test(password) ? true : false,
            specialChar: specialcharacterRegex.test(password) ? true : false
        })
    }
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    }
    return(
      <Formik
      initialValues={{password:""}}
      onSubmit={(values,{setSubmitting}) => {
          console.log("Loging");
      }}
      validationSchema={Yup.object().shape({
          password: Yup.string()
            .required("Entrez un mot de passe.")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
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
          <div className="card mx-3 shadow-lg mt-4 mb-4" style={{ justifyContent: "center" }}>
            <div className="card-body p-4">
                <h3 className="mb-3">Définssez votre mot de passe </h3>
                <form data-testid="Form" onSubmit={handleSubmit}>
                  <label 
                  data-testid="LabelPassword"
                  className="labels3">Nouveau mot de passe</label>
                  <div className="input-group">
                  <input
                    name="password"
                    data-testid="Inputpassword"
                    type={passwordShown ? "text" : "password"}
                    placeholder="Entrez votre mot de passe"
                    value={values.password}
                    onChange={(e) => {
                        onChangePassword(e.target.value);
                        handleChange(e);
                    }}
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

                  {<PasswordStrength validity={passwordValidity}/>}
                  <button 
                  data-testid="ButtonLogin"
                  className="col-12 buttons2" type="submit" disabled={isSubmitting}>
                    Valider
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
    );
  
  };
export default ChangePassword;