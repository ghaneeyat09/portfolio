import {GoMarkGithub} from "react-icons/go";
import {BsLinkedin} from "react-icons/bs";
import {FaWhatsappSquare} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
    const date = new Date();
    return(
        <div id="footer">
            <div className="iconWrap">
                <a href="https://github.com/ghaneeyat09"><GoMarkGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/ganiyat-jamiu"><BsLinkedin className="icon"/></a>
                <a href="https://wa.me/message/DPRFDLV5Z6UZD1"><FaWhatsappSquare className="icon"/></a>
                <a href="https://www.codementor.io/@ganiyat"><img src={process.env.PUBLIC_URL + "/images/cmIcon.jpeg"} alt="cmicon" className="cmIcon"/></a>
            </div>
            <p className="copyright">jamiu ganiyat &copy; {date.getFullYear()}</p>
        </div>
    )
}

export default Footer;