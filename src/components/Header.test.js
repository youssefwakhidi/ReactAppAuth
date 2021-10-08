import { render } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Header Component', () => {
    test("rendered Header",()=>{
        const {getByTestId}=render(<Router><Header/></Router>);
        const div=getByTestId("DivHeader");
        expect(div).toBeTruthy();
    });
    test("rendered Image",()=>{
        const {getByTestId}=render(<Router><Header/></Router>);
        const logo=getByTestId("logoImage");
        expect(logo).toBeTruthy();
    });
});
