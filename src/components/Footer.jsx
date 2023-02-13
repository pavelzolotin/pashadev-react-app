import styled from 'styled-components';

import Logo from '../img/logo.png';
import GithubIcon from '../img/github-icon.png';
import MailIcon from '../img/email-icon.png';
import TelegramIcon from '../img/telegram-icon.png';
import CurlyBracketsIcon from '../img/footer-curly-brackets.png';
import SourceCodeIcon from '../img/footer-source-code.png';
import ReactIcon from '../img/footer-react.png';
import JSIcon from '../img/footer-js.png';
import SquareBracketsIcon from '../img/footer-square-brackets.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 132rem;
  height: 100%;
  margin: 12rem auto 0 auto;

  @media (max-width: 767px) {
    margin: 6rem auto 0 auto;
  }
`;

const Footer = () => {
    return (
        <Container>
            <div className="footer__cards">
                <div className="footer__cards-item">
                    <img src={CurlyBracketsIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={SourceCodeIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={ReactIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={JSIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={SquareBracketsIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={CurlyBracketsIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={SourceCodeIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={ReactIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={JSIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={SquareBracketsIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={CurlyBracketsIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={SourceCodeIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={ReactIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={JSIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={SquareBracketsIcon} alt=""/>
                </div>
                <div className="footer__cards-item">
                    <img src={CurlyBracketsIcon} alt=""/>
                </div>
            </div>
            <div className="footer__wrapper">
                <div className="footer__logo-wrapper">
                    <a href="https://pashadev.ru" className="footer__logo-link">
                        <img src={Logo} alt="Logo" className="footer__logo"/>
                    </a>
                </div>
                <div className="footer__nav">
                    <div className="footer__nav-icon--github">
                        <a href="https://github.com/pavelzolotin" target="_blank" rel="noreferrer">
                            <img src={GithubIcon} alt="footer-github-icon"/>
                        </a>
                    </div>
                    <div className="footer__nav-icon--mail">
                        <a href="mailto:zolotinpavel@gmail.com">
                            <img src={MailIcon} alt="footer-mail-icon"/>
                        </a>
                    </div>
                    <div className="footer__nav-icon--telegram">
                        <a href="https://t.me/pavelzolotin" target="_blank" rel="noreferrer">
                            <img src={TelegramIcon} alt="footer-telegram-icon"/>
                        </a>
                    </div>
                </div>
                <div className="footer__text">
                    <p>Eat. Sleep. Code. Repeat</p>
                </div>
                <div className="footer__copyright">
                    <p>&copy; 2019-2023 PASHADEV</p>
                </div>
            </div>
        </Container>
    );
};

export default Footer;