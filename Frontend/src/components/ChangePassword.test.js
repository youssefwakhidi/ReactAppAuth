import { render } from '@testing-library/react';
import ChangePassword from './ChangePassword';
import { BrowserRouter as Router } from 'react-router-dom';


describe('ChangePassword Component', () => {
    test("rendered Password Label",()=>{
        const {getByTestId}=render(<Router><ChangePassword/></Router>);
        const InputPass=getByTestId("LabelPassword");
        expect(InputPass).toBeTruthy();
    });
    test("rendered Password Input",()=>{
        const {getByTestId}=render(<Router><ChangePassword/></Router>);
        const InputPass=getByTestId("Inputpassword");
        expect(InputPass).toBeTruthy();
    });
    test("rendered Button Eye",()=>{
        const {getByTestId}=render(<Router><ChangePassword/></Router>);
        const ButtonEye=getByTestId("ButtonEye");
        expect(ButtonEye).toBeTruthy();
    });
    test("rendered Button Login",()=>{
        const {getByTestId}=render(<Router><ChangePassword/></Router>);
        const ButtonLogin=getByTestId("ButtonLogin");
        expect(ButtonLogin).toBeTruthy();
    });
    test("rendered passwordtest list",()=>{
        const {getByTestId}=render(<Router><ChangePassword/></Router>);
        const passwordtest=getByTestId("passwordtest");
        expect(passwordtest).toBeTruthy();
    });
    
});
