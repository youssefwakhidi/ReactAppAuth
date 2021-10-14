import './Footer.css';
import logo from '../assets/engieblack.png';
const Footer = () => (
  <div data-testid="DivFooter" className="Footer fixed-bottom" style={{ maxHeight: "100px"}}>
    <div className="row align-items-center" style={{ maxWidth: "100%"}}>
      <div className="col-5 FootLogo">
        <img data-testid="logoImage" src={logo} alt="Engie" />
      </div>
      <div className="FootText col-7 d-flex">
        <label data-testid="FooterText">L'energie est notre avenir, <strong>économisons-la !</strong>
        </label>
      </div>   
    </div>
  </div>

)
export default Footer;