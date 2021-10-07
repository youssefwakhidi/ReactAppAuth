import { render, screen,fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ValidatedLoginForm from './ValidatedLoginForm';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Form Components', () => {
    test("rendered Email Label",()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        const InputEmail=getByTestId("LabelEmail");
        expect(InputEmail).toBeTruthy();
    });
    test("rendered Email Input",()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        const InputEmail=getByTestId("InputEmail");
        expect(InputEmail).toBeTruthy();
    });
    test("rendered Password Label",()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        const InputPass=getByTestId("LabelPassword");
        expect(InputPass).toBeTruthy();
    });
    test("rendered Password Input",()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        const InputPass=getByTestId("Inputpassword");
        expect(InputPass).toBeTruthy();
    });
    test("rendered Button Eye",()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        const ButtonEye=getByTestId("ButtonEye");
        expect(ButtonEye).toBeTruthy();
    });
    test("rendered Button Login",()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        const ButtonLogin=getByTestId("ButtonLogin");
        expect(ButtonLogin).toBeTruthy();
    });
    test ("Testing invalid email",async ()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        await act(async () => {
        const InputEmail=getByTestId("InputEmail");
        const ButtonLogin=getByTestId("ButtonLogin");
        const testWord ="test";
        await fireEvent.change(InputEmail,{target:{value:testWord}});
        await fireEvent(ButtonLogin,new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            }),);
        });
        const FeedBackEmail=getByTestId("FeedBackEmail");
        expect(FeedBackEmail.innerHTML).toBe("Email non valide");
    });
    test ("Testing no email entered",async ()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        await act(async () => {
        const InputEmail=getByTestId("InputEmail");
        const ButtonLogin=getByTestId("ButtonLogin");
        await fireEvent.blur(InputEmail);
        await fireEvent(ButtonLogin,new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            }),);
        });
        const FeedBackEmail=getByTestId("FeedBackEmail");
        expect(FeedBackEmail.innerHTML).toBe("Entrez une adresse email.");
    });
    test ("Testing invalid Password",async ()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        await act(async () => {
        const ButtonLogin=getByTestId("ButtonLogin");
        const Inputpassword=getByTestId("Inputpassword");
        const testWord ="12345678";
        await fireEvent.change(Inputpassword,{target:{value:testWord}});
        await fireEvent(ButtonLogin,new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            }),);
        });
        const FeedBackPassword=getByTestId("FeedBackPassword");
        expect(FeedBackPassword.innerHTML).toBe("Mot de passe doit contenir : 8 caractères, une majuscule ,une minuscule ,un chiffre et un caractère spécial.");
    });
    test ("Testing no Password entered",async ()=>{
        const {getByTestId}=render(<ValidatedLoginForm/>);
        await act(async () => {
        const ButtonLogin=getByTestId("ButtonLogin");
        const Inputpassword=getByTestId("Inputpassword");
        await fireEvent.blur(Inputpassword);
        await fireEvent(ButtonLogin,new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            }),);
        });
        const FeedBackPassword=getByTestId("FeedBackPassword");
        expect(FeedBackPassword.innerHTML).toBe("Entrez un mot de passe.");
    });


    test ("Test Submitting Valid inputs ",async ()=>{
        console.log = jest.fn();
        const {getByTestId}=render(<ValidatedLoginForm/>);
        await act(async () => {
        const ButtonLogin=getByTestId("ButtonLogin");
        const InputEmail=getByTestId("InputEmail");
        const Inputpassword=getByTestId("Inputpassword");
        await fireEvent.change(InputEmail,{target:{value:"youssefwakhidi@gmail.com"}});
        await fireEvent.change(Inputpassword,{target:{value:"Aaaaa11!"}});
        await fireEvent(ButtonLogin,new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            }),);
        });
        expect(console.log).toHaveBeenCalledWith('Loging');
    });

});
