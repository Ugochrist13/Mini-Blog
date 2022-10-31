import NavBar from "../NavBar/NavBar";
import './Footer.css'
import fsvg from "./images/facebook.svg"
import tsvg from "./images/twitter.svg"
import isvg from "./images/instagram.svg"
import ysvg from "./images/youtube.svg"

const Footer = () => {
    return (
        <div className="footer-main-container">

            <div className="footer-container">
                <ul className="footer-nav-ul">
                    <li>Home</li>
                    <li>Articles</li>
                    <li className="footer-blog">Skillupafrica Blog</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="footer-images">
                <ul className="footer-img-ul">
                    <li><img className="footer-img" src={fsvg} alt="" /></li>
                    <li><img className="footer-img" src={tsvg} alt="" /></li>
                    <li><img className="footer-img" src={isvg} alt="" /></li>
                    <li><img className="footer-img" src={ysvg} alt="" /></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;