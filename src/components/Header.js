import './Header.css';
import logo from '../assets/engie.svg';
const Header = () => (
  <div data-testid="DivHeader" className="header">
    <img data-testid="logoImage" src={logo} alt="Engie" />
  </div>
)
export default Header;