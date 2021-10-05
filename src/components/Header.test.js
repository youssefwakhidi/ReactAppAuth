import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
    test("rendered Header",()=>{
        const {getByTestId}=render(<Header/>);
        const div=getByTestId("DivHeader");
        expect(div).toBeTruthy();
    });
    test("rendered Image",()=>{
        const {getByTestId}=render(<Header/>);
        const logo=getByTestId("logoImage");
        expect(logo).toBeTruthy();
    });
});
