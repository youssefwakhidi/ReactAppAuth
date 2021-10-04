import './components/Header.js';
import logo from './assets/engie.svg';
const Header = () => (
  <div className="header border-bottom">
    <img src={logo} alt="Engie" />
  </div>
)
export default Header;