const PasswordStrength =({validity:{minChar,number,Uppercase,specialChar}}) =>{
return (
                <div className="password-meter ">
                        <p className="text-dark">Votre mot de passe doit contenir :</p>
                        <ul>
                            <PasswordStrengthItem isValid={minChar} text="8 à 20 caractères sans espaces"/>
                            <PasswordStrengthItem isValid={number} text="Un chiffre"/>
                            <PasswordStrengthItem isValid={Uppercase} text="Une majuscule et une miniscule"/>
                            <PasswordStrengthItem isValid={specialChar} text="Un caratère special (!*..)"/>
                        </ul>
                  </div>  
);
};

const PasswordStrengthItem = ({isValid,text}) => {
    const highlight = isValid ? "text-success" : isValid !== null ? "text-danger" : "";   
    return <li className={highlight}>{text}</li>
}
export default PasswordStrength;
