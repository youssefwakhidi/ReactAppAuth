import { render, screen } from '@testing-library/react';
import App from './App';
describe('Test App Component', () => {
  test('Test Header Component is shown', () => {
    const {getByTestId}=render(<App/>);
    const Header=getByTestId("DivHeader");
    expect(Header).toBeTruthy();
  });
  test('Test Form Component is shown', () => {
    const {getByTestId}=render(<App/>);
    const Form=getByTestId("Form");
    expect(Form).toBeTruthy();
  });
});