import erroned from '../assets/exclamation-circle.svg';
import valid from '../assets/check-circle.svg';

const PasswordStrength =({validity:{minChar,number,Uppercase,specialChar}}) =>{
return (
                    <div  data-testid="passwordtest">
                        <p className="text-dark"><strong>Votre mot de passe doit contenir :</strong></p>
                        <div  style={{marginLeft:"5%"}}>
                        <PasswordStrengthItem isValid={minChar} text=" 8 à 20 caractères sans espaces"/>
                        <PasswordStrengthItem isValid={number} text=" Un chiffre"/>
                        <PasswordStrengthItem isValid={Uppercase} text=" Une majuscule et une miniscule"/>
                        <PasswordStrengthItem isValid={specialChar} text=" Un caratère special (!*..)"/>
                        </div>
                    </div>  
);
};

const PasswordStrengthItem = ({isValid,text}) => {
    const icon = isValid ? <img src={valid}/> :  <img src={erroned}/> ;   
    return <p>{icon}{text}</p>
}
export default PasswordStrength;
