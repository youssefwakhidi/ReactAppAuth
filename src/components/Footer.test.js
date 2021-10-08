import { render } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Footer Component', () => {
    test("rendered Footer",()=>{
        const {getByTestId}=render(<Router><Footer/></Router>);
        const div=getByTestId("DivFooter");
        expect(div).toBeTruthy();
    });
    test("rendered Image",()=>{
        const {getByTestId}=render(<Router><Footer/></Router>);
        const logo=getByTestId("logoImage");
        expect(logo).toBeTruthy();
    });
    test("rendered Text",()=>{
        const {getByTestId}=render(<Router><Footer/></Router>);
        const text=getByTestId("FooterText");
        expect(text).toBeTruthy();
    });
});
