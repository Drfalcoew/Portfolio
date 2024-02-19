import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const name = "DRFALCOEW";

    return (
        <div className="footer-container">
            <div className="footer-container-left">
                <a className="footer-item" href="https://www.linkedin.com/in/drfalcoew/">LinkedIn</a>
                <a className="footer-item" href="https://www.github.com/drfalcoew">GitHub</a>
            </div>
            <p className="footer-item-label">© {currentYear} {name}</p>
            <div className="footer-container-right">
            </div>
        </div>
    )
}

export default Footer;