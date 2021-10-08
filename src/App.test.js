import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Test App Component', () => {
  test('Test Header Component is shown', () => {
    const {getByTestId}=render(<Router><App/></Router>);
    const Header=getByTestId("DivHeader");
    expect(Header).toBeTruthy();
  });
  test('Test Form Component is shown', () => {
    const {getByTestId}=render(<Router><App/></Router>);
    const Form=getByTestId("Form");
    expect(Form).toBeTruthy();
  });
  test('Test Footer Component is shown', () => {
    const {getByTestId}=render(<Router><App/></Router>);
    const Footer=getByTestId("DivFooter");
    expect(Footer).toBeTruthy();
  });
});