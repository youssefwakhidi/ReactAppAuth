import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
    test("rendered Footer",()=>{
        const {getByTestId}=render(<Footer/>);
        const div=getByTestId("DivFooter");
        expect(div).toBeTruthy();
    });
    test("rendered Image",()=>{
        const {getByTestId}=render(<Footer/>);
        const logo=getByTestId("logoImage");
        expect(logo).toBeTruthy();
    });
    test("rendered Text",()=>{
        const {getByTestId}=render(<Footer/>);
        const text=getByTestId("FooterText");
        expect(text).toBeTruthy();
    });
});
