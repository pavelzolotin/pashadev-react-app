import {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import styled from 'styled-components';

import HeroImg from '../img/hero-img.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 132rem;
  height: 100vh;
  margin: auto;

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

const CardItem = styled.div`
  position: absolute;
  width: 17rem;
  height: 10rem;
  z-index: 1;
  border-radius: 0.5rem 3rem 0.5rem 3rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 .6rem .6rem rgba(0, 0, 0, 0.23);
  transition: transform .3s;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 13.5rem;
    height: 8rem;
  }

  &:hover:before {
    transform: translateY(-3rem);
    transition: transform .3s;

    @media (max-width: 767px) {
      transform: translateY(-1.5rem);
    }
  }

  &:before {
    position: absolute;
    font-size: 6rem;
    font-family: 'Library 3 AM';
    color: #fff;
    opacity: .2;
    transition: transform .3s;
  }

  &:nth-child(1) {
    top: 13%;
    left: -7%;
    background: #f0d91d;

    @media (max-width: 767px) {
      top: 8%;
      right: 3%;
      left: inherit;
    }

    &:before {
      content: 'JS';
      right: 0;
      bottom: -2.5rem;
    }
  }

  &:nth-child(2) {
    top: -2%;
    left: 26%;
    background: #61dbfb;

    @media (max-width: 767px) {
      top: 18%;
      right: 3%;
      left: inherit;
    }

    &:before {
      content: 'React';
      right: -5rem;
      bottom: -2.5rem;

      @media (max-width: 767px) {
        right: -8rem;
      }
    }
  }

  &:nth-child(3) {
    top: 30%;
    left: 48%;
    background: #87bf00;

    @media (max-width: 767px) {
      top: 28%;
      right: 3%;
      left: inherit;
    }

    &:before {
      content: 'Node';
      right: -1rem;
      bottom: -2.5rem;

      @media (max-width: 767px) {
        right: -6rem;
      }
    }
  }

  &:nth-child(4) {
    top: 70%;
    left: 44%;
    background: #ca6092;

    @media (max-width: 767px) {
      top: 38%;
      right: 3%;
      left: inherit;
    }

    &:before {
      content: 'SCSS';
      right: -1rem;
      bottom: -2.5rem;

      @media (max-width: 767px) {
        right: -4rem;
      }
    }
  }

  &:nth-child(5) {
    top: 55%;
    left: -10%;
    background: #2d79c7;

    @media (max-width: 767px) {
      top: 48%;
      left: inherit;
      right: 3%;
    }

    &:before {
      content: 'TS';
      right: 0;
      bottom: -2.5rem;
    }
  }
`;

const CardTitle = styled.h3`
  margin: 1rem 0 0 1rem;
  font-size: 2rem;
  color: #fff;

  @media (max-width: 767px) {
    margin: 1rem 0 0 .7rem;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;
  z-index: 0;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const Text = styled.div`
  width: 72%;
  margin: 0 auto 2rem auto;
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem 6rem 6rem 0.5rem;
  transition: background-color .3s;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
    padding: 3rem 0 3rem 0;
  }

  &:hover {
    background-color: transparent;
    transition: background-color .3s;
  }
`;

const TextTitle = styled.h1`
  width: 60%;
  margin: auto;
  font-size: 3.7rem;
  font-weight: 400;
  line-height: 1.4;
  white-space: pre-line;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 2.7rem;
  }
`;

const TitleSpan = styled.span`
  font-family: 'Library 3 AM';
  font-size: 5rem;
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
  margin: 3rem auto 0 auto;
  padding: 1.9rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 .5rem .3rem -.2rem rgba(0, 0, 0, 0.23);

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
  letter-spacing: .3rem;
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

  @media (max-width: 767px) {
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 16rem;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  object-fit: contain;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

const Hero = () => {
    const {t} = useTranslation();

    const wrapper = useRef(null);
    const heroCards = useRef(null);
    const heroImage = useRef(null);

    useEffect(() => {
        cardsAnimation();
    });

    const cardsAnimation = () => {
        const wrap = wrapper.current;
        const cards = heroCards.current;
        const image = heroImage.current;

        wrap.addEventListener('mousemove', (e) => {
            const cardMoveX = e.clientX / (window.innerWidth / 5);
            const cardMoveY = e.clientY / (window.innerHeight / 8);
            const imageMoveX = e.clientY / (window.innerWidth / 10);
            const imageMoveY = e.clientY / (window.innerHeight / 15);

            cards.style.transform = `translate3d(-${cardMoveX}%, -${cardMoveY}%, 0)`;
            cards.style.transitionDuration = '2s';
            image.style.transform = `translate3d(-${imageMoveX}%, -${imageMoveY}%, 0)`;
            image.style.transitionDuration = '2s';
        });
    };

    return (
        <Container ref={wrapper}>
            <Cards ref={heroCards}>
                <CardItem>
                    <CardTitle>JavaScript</CardTitle>
                </CardItem>
                <CardItem>
                    <CardTitle>React JS</CardTitle>
                </CardItem>
                <CardItem>
                    <CardTitle>Node JS</CardTitle>
                </CardItem>
                <CardItem>
                    <CardTitle>SCSS</CardTitle>
                </CardItem>
                <CardItem>
                    <CardTitle>TypeScript</CardTitle>
                </CardItem>
            </Cards>
            <TextBox>
                <Text>
                    <TextTitle>{t("hero-title")} <TitleSpan>{t("hero-span")}</TitleSpan></TextTitle>
                    <Description>{t("hero-description")}</Description>
                </Text>
                <Link to="https://t.me/pavelzolotin">
                    <Button>
                        <ButtonIcon>
                            <ButtonIconRect x="0" y="0" fill="none" width="100%" height="100%" className="rect"/>
                        </ButtonIcon>
                        <ButtonText>{t("hero-button")}</ButtonText>
                    </Button>
                </Link>
            </TextBox>
            <HeroImage>
                <Img src={HeroImg} alt="hero-image" ref={heroImage}/>
            </HeroImage>
        </Container>
    );
};

export default Hero;