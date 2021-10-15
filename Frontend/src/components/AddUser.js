import {useState,Component} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ShowIcon from '../assets/eye.svg';
import ShowOffIcon from '../assets/eye-slash.svg';
import './ValidatedLoginForm.css';
import PasswordStrength from "./PasswordStrength";
import { Link,withRouter,BrowserRouter as Router,Route,Switch } from "react-router-dom";
import UserService from "../services/UserService";
class AddUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          isnumberRegex :/\d/,
          nospace :/^\S*$/,
          specialcharacterRegex :/[!@#\$%\^&\*]/,
          MajMinRegex :/(?=.*[a-z])(?=.*[A-Z])/,
          password:"",
          email:"",
          FirstName:"",
          LastName:"",
          minChar:false,
          number:false,
          Uppercase:false,
          specialChar:false,
          passwordShown:false,
        }
        this.onChangePassword =this.onChangePassword.bind(this);
        this.togglePasswordVisiblity =this.togglePasswordVisiblity.bind(this);
        this.passwordValidity =this.passwordValidity.bind(this);
        this.saveUser =this.saveUser.bind(this);
        this.ChangeFirstName =this.ChangeFirstName.bind(this);
        this.ChangeLastName =this.ChangeLastName.bind(this);
        this.ChangeEmail =this.ChangeEmail.bind(this);


    }
    passwordValidity = (password2) =>{
      this.setState({minChar:((password2.length >= 8 && password2.length <= 20) && this.state.nospace.test(password2) )  ? true : false});
      this.setState({number : this.state.isnumberRegex.test(password2) ? true : false});
      this.setState({Uppercase :this.state.MajMinRegex.test(password2) ? true : false});
      this.setState({specialChar:this.state.specialcharacterRegex.test(password2) ? true : false});
    }
     onChangePassword = password2 =>
     {
              this.setState({password:password2});
              this.passwordValidity(password2);
     }
           
     togglePasswordVisiblity = () => {
       this.setState({passwordShown:this.state.passwordShown ? false : true});
    
    }
    ChangeFirstName = (x) => {
      this.setState({FirstName:x});
    }
    ChangeLastName = (x) => {
      this.setState({LastName:x});
    }
    ChangeEmail = (x) => {
      this.setState({email:x});
    }
      
    saveUser = (e) =>
    {
      let User = {firstname:this.state.FirstName,
        lastname:this.state.LastName,
        email:this.state.email,
        password:this.state.password};
        console.log("User : " + JSON.stringify(User));
        UserService.addUser(User).then(res =>
          {
            this.props.history.push("/");
          });
    }
    componentDidMount()
    {
    
    }
    render() {
        return (
            <Formik
            initialValues={{FirstName:"",LastName:"",email:"",password:"",password2:""}}
            onSubmit={(values,{setSubmitting}) => {
                console.log("Register");
                this.saveUser(values);
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email non valide")
                .required("Entrez une adresse email."),
                LastName: Yup.string()
                .matches(/^[A-Za-z]+$/,"Nom non valide")
                .required("Entrez votre nom."),
                FirstName: Yup.string()
                .matches(/^[A-Za-z]+$/,"Prénom non valide")
                .required("Entrez votre prénom."),
                password: Yup.string()
                .required("Entrez un mot de passe.")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
                password2: Yup.string()
                .required("Entrez un mot de passe.")
                .oneOf([Yup.ref('password'), null], 'Le mot de passe doit matchez')
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
                      <h3 className="mb-3"  style={{ textAlign:"center" }}> Register </h3>
                      <form data-testid="Form" onSubmit={handleSubmit}>
                      <div className="row justify-content-center">
                      <div className="col-5">
                      <label 
                      data-testid="LabelFirstName"
                      className="labels">Prénom</label>
                      <input
                        name="FirstName"
                        type="text"
                        data-testid="InputFirstName"
                        placeholder="Entrez votre prénom"
                        value={values.FirstName}
                        onChange={(e) => {
                          this.ChangeFirstName(e.target.value);
                          handleChange(e);
                      }}
                        onBlur={handleBlur}
                        className={errors.FirstName && touched.FirstName && "error"}
                        className="focus"
                      />
                      {errors.FirstName && touched.FirstName && (
                        <div 
                        data-testid="FeedBackFirstName"
                        className="input-feedback">{errors.FirstName}</div>
                      )}
                      </div>
                      <div className="col-5">
                      <label 
                      data-testid="LabelLastName"
                      className="labels">Nom</label>
                      <input
                        name="LastName"
                        type="text"
                        data-testid="InputLastName"
                        placeholder="Entrez votre nom"
                        value={values.LastName}
                        onChange={(e) => {
                          this.ChangeLastName(e.target.value);
                          handleChange(e);
                      }}
                        onBlur={handleBlur}
                        className={errors.LastName && touched.LastName && "error"}
                        className="focus"
                      />
                      {errors.LastName && touched.LastName && (
                        <div 
                        data-testid="FeedBackLastName"
                        className="input-feedback">{errors.LastName}</div>
                      )}
                      </div>
                      </div>
                      <div className="row justify-content-center">
                      <div className="col-10">
                      <label 
                      data-testid="LabelEmail"
                      className="labels" htmlFor="email">Adresse Email</label>
                      <input
                        name="email"
                        type="text"
                        data-testid="InputEmail"
                        placeholder="Entrez votre adresse email"
                        value={values.email}
                        onChange={(e) => {
                          this.ChangeEmail(e.target.value);
                          handleChange(e);
                      }}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                        className="focus"
                      />
                      {errors.email && touched.email && (
                        <div 
                        data-testid="FeedBackEmail"
                        className="input-feedback">{errors.email}</div>
                      )}
                      </div>
                      </div>
      
      
                      <div className="row justify-content-center">
                      <div className="col-5">
      
                        <label 
                        data-testid="LabelPassword"
                        className="labels">Mot de passe</label>
                        <div className="input-group">
                        <input
                          name="password"
                          data-testid="Inputpassword"
                          type={this.state.passwordShown ? "text" : "password"}
                          placeholder="Entrez votre mot de passe"
                          value={values.password}
                          onChange={(e) => {
                              this.onChangePassword(e.target.value);
                              handleChange(e);
                          }}
                          onBlur={handleBlur}
                          className={errors.password && touched.password && "error"}
                          className="focus col-10"
                        />
                        <button 
                          data-testid="ButtonEye"
                          type="button"
                          className="buttonPad col-2 mobile-space" style={{marginBottom:"20px",backgroundColor:"#ffffff"}}
                          onClick={this.togglePasswordVisiblity}
                        >
                                      {this.state.passwordShown ? <img src={ShowIcon}/> :<img src={ShowOffIcon}/>}
                        </button>
                        </div>
                        </div>
                        <div className="col-5">
      
                        <label 
                        data-testid="LabelConfirmPassword"
                        className="labels">Confirmez Mot de passe</label>
                        <div className="input-group">
                        <input
                          name="password2"
                          data-testid="Inputpassword2"
                          type={this.state.passwordShown ? "text" : "password"}
                          placeholder="Rentrez votre mot de passe"
                          value={values.password2}
                          onChange={(e) => {
                              handleChange(e);
                          }}
                          onBlur={handleBlur}
                          className={errors.password2 && touched.password2 && "error"}
                          className="focus col-10"
                        />
      
                        <button 
                          data-testid="ButtonEye"
                          type="button"
                          className="buttonPad col-2 mobile-space" style={{marginBottom:"20px",backgroundColor:"#ffffff"}}
                          onClick={this.togglePasswordVisiblity}
                        >
                                      {this.state.passwordShown ? <img src={ShowIcon}/> :<img src={ShowOffIcon}/>}
                        </button>
                          {errors.password2 && touched.password2 && (
                          <div 
                          data-testid="FeedBackConfirmPassword"
                          className="input-feedback">{errors.password2}</div>
                          )}
                        </div>
                        </div>
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-11">
                          <PasswordStrength minChar={this.state.minChar} number={this.state.number} Uppercase={this.state.Uppercase} specialChar={this.state.specialChar}/>
                          </div>
                        </div>
                        <div className="row justify-content-center">
                          
                        <button 
                        data-testid="ButtonRegister"
                        className="col-3 buttons2" type="submit"  style={{ marginTop:"15px"}}>
                          Valider
                        </button>
                        <div className="col-1"></div>
                        <div 
                        data-testid="ButtonLogin"
                        className="col-3 links btn-secondary">
                        <Link  style={{ textDecoration: 'none',color:"white" }} to="/">
                        Login
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
        }
        
}

export default withRouter(AddUser)