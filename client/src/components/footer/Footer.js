import telegramIcon from "./../../assets/icons/icon-telegram.svg";
import behanceIcon from "./../../assets/icons/icon-behance.svg";
import imailIcon from "./../../assets/icons/icon-email.svg";

import { NavLink } from "react-router-dom";

import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <div className="icon">
                    <a href="https://t.me/ILIALiT"><img src={telegramIcon} alt="telegram"/></a>
                </div>
                <div className="icon">
                    <a href="https://www.behance.net/iliya1"><img src={behanceIcon} alt="behance"/></a>
                </div>
                <div className="icon">
                    <a href="mailto:ilialitvinenko2004@gmail.com"><img src={imailIcon} alt="email"/></a>
                </div>
            </div>
            <div className="footer__title">
                <h5><NavLink to="/">Литвиненко Илья</NavLink></h5>
            </div>
        </footer>
    );
}

export default Footer;