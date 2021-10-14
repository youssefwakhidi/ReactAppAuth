import erroned from '../assets/exclamation-circle.svg';
import valid from '../assets/check-circle.svg';

const PasswordStrength =({minChar,number,Uppercase,specialChar}) =>{
return (
                    <div  data-testid="passwordtest">
                        <div  style={{marginLeft:"5%"}}>

                        <p className="text-dark"><strong>Votre mot de passe doit contenir :</strong></p>
                        <div  style={{marginLeft:"5%"}}>

                        <div className="row">
                        <PasswordStrengthItem isValid={minChar} text=" 8 à 20 caractères sans espaces"/>
                        <PasswordStrengthItem isValid={number} text=" Un chiffre"/>
                        </div>
                        <div className="row">
                        <PasswordStrengthItem isValid={Uppercase} text=" Une majuscule et une miniscule"/>
                        <PasswordStrengthItem isValid={specialChar} text=" Un caratère special (!*..)"/>
                        </div>
                        </div>
                        </div>
                    </div>  
);
};

const PasswordStrengthItem = ({isValid,text}) => {
    const icon = isValid ? <img src={valid}/> :  <img src={erroned}/> ;   
    return <div className="col-6"><p style={{fontSize:"12px"}}>{icon}{text}</p></div>
}
export default PasswordStrength;
