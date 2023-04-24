import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Logo from '../../assets/img/logo.png';
import { footerCards } from '../../utils/data';
import { iconsNav } from '../../utils/data';

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 10rem auto 0 auto;

  @media (max-width: 767px) {
    margin: 5rem auto 0 auto;
  }
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
  opacity: .1;
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
    margin-top: 5rem;
  }
`;

const NavIcon = styled.button`
  display: flex;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin: 0 1.5rem 0 1.5rem;

  @media (max-width: 767px) {
    margin: 3rem 0 0 0;
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
    const footerItems = useRef(null);

    useEffect(() => {
        const cards = footerItems.current;
        cards.addEventListener('mousemove', (e) => cardsAnimation(e));

        return () => {
            cards.removeEventListener('mousemove', (e) => cardsAnimation(e));
        };
    }, []);

    const cardsAnimation = (e) => {
        const cards = footerItems.current;
        const mouseX = e.clientX / (window.innerWidth / 7);
        const mouseY = e.clientY / (window.innerHeight / 20);

        requestAnimationFrame(() => {
            cards.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
            cards.style.transitionDuration = '2s';
        });
    };

    return (
        <Container>
            <Cards ref={footerItems}>
                {
                    footerCards.map(card => (
                        <Card key={card.id}>
                            <CardImg
                                src={card.image}
                                alt=""
                            />
                        </Card>
                    ))
                }
            </Cards>
            <Wrapper>
                <LogoBox>
                    <a href="https://pashadev.ru">
                        <LogoImg
                            src={Logo}
                            alt="Logo"
                        />
                    </a>
                </LogoBox>
                <Navigation>
                    {
                        iconsNav.map(icon => (
                            <Link to={icon.link} key={icon.id} target="_blank">
                                <NavIcon key={icon.id}>
                                    <NavIconImg
                                        src={icon.image}
                                        alt={icon.alt}
                                    />
                                </NavIcon>
                            </Link>
                        ))
                    }
                </Navigation>
                <Text>
                    <TextDescription>Eat. Sleep. Code. Repeat</TextDescription>
                </Text>
                <Copyright>
                    <CopyDescription>© 2019 - 2023 PASHADEV</CopyDescription>
                </Copyright>
            </Wrapper>
        </Container>
    );
};

export default Footer;