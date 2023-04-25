import {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import styled from 'styled-components';

import {heroCards} from '../../utils/data';
import HeroImg from '../../assets/img/hero-img.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 170rem;
  height: 100vh;
  margin: auto;

  @media (min-width: 1441px) and (max-width: 1780px) {
    max-width: 132rem;
  }
  
  @media (min-width: 1250px) and (max-width: 1440px) {
    max-width: 125rem;
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    margin-top: 1rem;
  }
`;

const Cards = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`;

const CardItem = styled.img`
  position: absolute;
  z-index: 1;

  &:nth-child(1) {
    top: 14%;
    left: -4%;

    @media (min-width: 1250px) and (max-width: 1440px) {
      top: 7%;
      left: 0;
    }
  }

  &:nth-child(2) {
    top: 4%;
    left: 34%;

    @media (min-width: 1250px) and (max-width: 1440px) {
      top: -4%;
      left: 34%;
    }
  }

  &:nth-child(3) {
    top: 24%;
    left: 60%;

    @media (min-width: 1250px) and (max-width: 1440px) {
      top: 20%;
    }
  }

  &:nth-child(4) {
    bottom: 23%;
    left: 54%;
  }

  &:nth-child(5) {
    bottom: 12%;
    left: 2%;

    @media (min-width: 1250px) and (max-width: 1440px) {
      bottom: 15%;
      left: 4%;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding-bottom: 7rem;
  text-align: center;

  @media (min-width: 1250px) and (max-width: 1440px) {
    width: 60%;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 2rem;
    overflow-x: hidden;
  }
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 10rem;
  transition: background-color .3s;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
    padding: 3rem 0 3rem 0;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem 6rem 6rem 0.5rem;
  }

  &:hover {
    background-color: transparent;
    transition: background-color .3s;
  }
`;

const TextTitleOne = styled.h1`
  margin: auto;
  font-size: 10rem;
  position: absolute;
  transform-origin: top left;
  left: -7rem;
  top: 50%;
  transform: rotate(-90deg) translateX(-50%);
  opacity: .1;
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }
`;

const TextTitleTwo = styled.h1`
  width: 100%;
  font-size: 6.5rem;

  @media (max-width: 767px) {
    font-size: 3.7rem;
  }
`;

const TitleSpan = styled.span`
  display: block;
  font-family: 'Library 3 AM';
  font-size: 6.5rem;
  color: #fd640d;

  @media (max-width: 767px) {
    font-size: 3.7rem;
  }
`;

const Description = styled.p`
  width: 90%;
  font-size: 1.8rem;
  line-height: 1.5;
  margin: 1.5rem auto 0 auto;
  color: #fff;
  opacity: .8;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 2rem;
  }
`;

const Button = styled.button`
  position: relative;
  margin: -3rem auto 0 auto;
  padding: 1.9rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 .5rem .3rem -.2rem rgba(0, 0, 0, 0.23);
  z-index: 1;

  @media (max-width: 767px) {
    margin: 3rem auto 0 auto;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: rgba(255, 255, 255, .1);
    width: 0;
    height: 100%;
    transition: width 1s;
  }

  @media (hover: hover) {
    &:hover:before {
      width: 100%;
      border-radius: .5rem;
      transition: width 1s;
    }

    &:hover {
      .rect {
        stroke-dashoffset: 48;
        stroke-dasharray: 0, 210;
        transition: all 1s cubic-bezier(0.7, 1, 0.9, 1);
      }
    }
`;

const ButtonIcon = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: .5rem;
`;

const ButtonIconRect = styled.rect`
  fill: none;
  stroke: #fd640d;
  stroke-width: 5;
  stroke-dasharray: 435, 0;
  transition: all 1s linear;
`;

const ButtonText = styled.span`
  position: relative;
  font-family: 'Play', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: .2rem;
  text-transform: uppercase;
  color: #fff;
`;

const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  width: 48rem;
  height: 48rem;

  @media (min-width: 1250px) and (max-width: 1440px) {
    width: 38rem;
    height: 38rem;
  }

  @media (max-width: 767px) {
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 16rem;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 80%;
  object-fit: contain;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

const Hero = () => {
    const {t} = useTranslation();

    const icons = useRef(null);
    const image = useRef(null);
    const titleOne = useRef(null);
    const titleTwo = useRef(null);
    const titleThree = useRef(null);

    useEffect(() => {
        const cards = icons.current;
        cards.addEventListener('mousemove', (e) => cardsAnimation(e));
        window.addEventListener('scroll', titleAnimation);

        return () => {
            cards.removeEventListener('mousemove', (e) => cardsAnimation(e));
            window.removeEventListener('scroll', titleAnimation);
        };
    }, []);

    const cardsAnimation = (e) => {
        const cards = icons.current;
        const img = image.current;

        const cardMoveX = e.clientX / (window.innerWidth / 5);
        const cardMoveY = e.clientY / (window.innerHeight / 8);

        requestAnimationFrame(() => {
            cards.style.transform = `translate3d(-${cardMoveX}%, -${cardMoveY}%, 0)`;
            cards.style.transitionDuration = '2s';
            img.style.transform = `translate3d(-${cardMoveX}%, -${cardMoveY}%, 0)`;
            img.style.transitionDuration = '2s';
        });
    };

    const titleAnimation = () => {
        let offsetY = window.scrollY;

        requestAnimationFrame(() => {
            titleOne.current.style.transform = `rotate(-90deg) translateX(calc(-20vh + ${offsetY}px))`;
            titleTwo.current.style.transform = `translateX(calc(0vh + ${offsetY}px))`;
            titleThree.current.style.transform = `translateX(calc(0vh - ${offsetY}px))`;
        });
    };

    return (
        <Container>
            <TextBox>
                <Text>
                    <TextTitleOne ref={titleOne}>{t("hero-title-one")}</TextTitleOne>
                    <TextTitleTwo ref={titleTwo}>{t("hero-title-two")}</TextTitleTwo>
                    <TitleSpan ref={titleThree}>{t("hero-span")}</TitleSpan>
                    <Description>{t("hero-description")}</Description>
                </Text>
                <Link to="https://t.me/pavelzolotin" target="_blank">
                    <Button>
                        <ButtonIcon>
                            <ButtonIconRect x="0" y="0" fill="none" width="100%" height="100%" className="rect" />
                        </ButtonIcon>
                        <ButtonText>{t("hero-button")}</ButtonText>
                    </Button>
                </Link>
            </TextBox>
            <HeroImage>
                <Img
                    ref={image}
                    src={HeroImg}
                    alt="hero-image"
                />
            </HeroImage>
            <Cards ref={icons}>
                {
                    heroCards.map(card => (
                        <CardItem
                            key={card.id}
                            src={card.image}
                        >
                        </CardItem>
                    ))
                }
            </Cards>
        </Container>
    );
};

export default Hero;