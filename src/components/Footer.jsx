import {useEffect, useRef} from 'react';
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
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 10rem auto 0 auto;
`;

const Cards = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  transition: transform .3s;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Card = styled.div`
  &:nth-child(1) {
    position: absolute;
    top: 51%;
    left: 29%;
  }

  &:nth-child(2) {
    position: absolute;
    bottom: 22%;
    left: 6%;
  }

  &:nth-child(3) {
    position: absolute;
    bottom: 28%;
    right: 8%;
  }

  &:nth-child(4) {
    position: absolute;
    top: 50%;
    right: 23%;
  }

  &:nth-child(5) {
    position: absolute;
    bottom: 18%;
    right: 0;
  }

  &:nth-child(6) {
    position: absolute;
    top: 33%;
    right: 2%;
  }

  &:nth-child(7) {
    position: absolute;
    bottom: 9%;
    right: 14%;
  }

  &:nth-child(8) {
    position: absolute;
    top: 18%;
    left: 30%;
  }

  &:nth-child(9) {
    position: absolute;
    bottom: 2%;
    left: 22%;
  }

  &:nth-child(10) {
    position: absolute;
    top: 32%;
    left: 14%;
  }

  &:nth-child(11) {
    position: absolute;
    top: 12%;
    right: 37%;
  }

  &:nth-child(12) {
    position: absolute;
    bottom: 28%;
    right: 35%;
  }

  &:nth-child(13) {
    position: absolute;
    bottom: 5%;
    right: 32%;
  }

  &:nth-child(14) {
    position: absolute;
    top: 28%;
    left: 48%;
  }

  &:nth-child(15) {
    position: absolute;
    top: 22%;
    right: 18%;
  }

  &:nth-child(16) {
    position: absolute;
    bottom: 12%;
    left: 36%;
  }
`;

const CardImg = styled.img`
  opacity: .3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  width: 32rem;
  height: 5rem;
  z-index: 1;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  z-index: 1;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const NavIcon = styled.div`
  display: flex;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin: 0 2rem 0 0;

  @media (max-width: 767px) {
    margin: 3rem 0 0 0;
  }

  &:nth-child(2) {
    margin-right: 2rem;

    @media (max-width: 767px) {
      margin: 3rem 0 0 0;
    }
  }

  &:nth-child(3) {
    @media (max-width: 767px) {
      margin-top: 3rem;
    }
  }
`;

const NavIconImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  margin-top: 7rem;
`;

const TextDescription = styled.p`
  font-size: 3.7rem;
  text-align: center;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 2.7rem;
  }
`;

const Copyright = styled.div`
  position: absolute;
  width: 100%;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CopyDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
  color: #fff;
`;

const Footer = () => {
    const ref = useRef(null);

    const footerAnimationWidth = window.innerWidth / 7;
    const footerAnimationHeight = window.innerHeight / 20;

    useEffect(() => {
        cardsAnimation();
    });

    const cardsAnimation = () => {
        const footerCards = ref.current;

        footerCards.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / footerAnimationWidth;
            const mouseY = e.clientY / footerAnimationHeight;
            footerCards.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
        });
    };

    return (
        <Container>
            <Cards ref={ref}>
                <Card>
                    <CardImg src={CurlyBracketsIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={SourceCodeIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={ReactIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={JSIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={SquareBracketsIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={CurlyBracketsIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={SourceCodeIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={ReactIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={JSIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={SquareBracketsIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={CurlyBracketsIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={SourceCodeIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={ReactIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={JSIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={SquareBracketsIcon} alt=""/>
                </Card>
                <Card>
                    <CardImg src={CurlyBracketsIcon} alt=""/>
                </Card>
            </Cards>
            <Wrapper>
                <LogoBox>
                    <a href="https://pashadev.ru">
                        <LogoImg src={Logo} alt="Logo"/>
                    </a>
                </LogoBox>
                <Navigation>
                    <NavIcon>
                        <a href="https://github.com/pavelzolotin" target="_blank" rel="noreferrer">
                            <NavIconImg src={GithubIcon} alt="footer-github-icon"/>
                        </a>
                    </NavIcon>
                    <NavIcon>
                        <a href="mailto:zolotinpavel@gmail.com">
                            <NavIconImg src={MailIcon} alt="footer-mail-icon"/>
                        </a>
                    </NavIcon>
                    <NavIcon>
                        <a href="https://t.me/pavelzolotin" target="_blank" rel="noreferrer">
                            <NavIconImg src={TelegramIcon} alt="footer-telegram-icon"/>
                        </a>
                    </NavIcon>
                </Navigation>
                <Text>
                    <TextDescription>Eat. Sleep. Code. Repeat</TextDescription>
                </Text>
                <Copyright>
                    <CopyDescription>&copy; 2019 - 2023 PASHADEV</CopyDescription>
                </Copyright>
            </Wrapper>
        </Container>
    );
};

export default Footer;