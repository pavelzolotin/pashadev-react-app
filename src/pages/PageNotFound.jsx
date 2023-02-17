import {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

import HeroImg from '../img/hero-img.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 132rem;
  margin: auto;
  height: 85vh;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 70vh;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  width: 56rem;
  height: 56rem;

  @media (max-width: 767px) {
    width: 15rem;
    height: 15rem;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 80%;
  height: 80%;
  object-fit: contain;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    top: 5%;
    right: 0;
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
    margin-top: 5rem;
  }
`;

const Text = styled.div`
  width: 75%;
  margin: 0 auto 2rem auto;
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem 6rem 6rem 0.5rem;
  transition: background-color .3s;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
    padding: 4rem 1rem 4rem 1rem;
  }

  &:hover {
    background-color: transparent;
    transition: background-color .3s;
  }
`;

const H1 = styled.h1`
  width: 100%;
  margin: auto;
  font-size: 3.7rem;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 2.7rem;
  }
`;

const Description = styled.p`
  width: 90%;
  font-size: 1.8rem;
  line-height: 1.5;
  margin: 2rem auto 0 auto;
  color: #fff;
  opacity: .8;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Button = styled.button`
  position: relative;
  margin: 3rem auto 0 auto;
  padding: 1.9rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 .5rem .3rem -.2rem rgba(0, 0, 0, 0.23);

  @media (max-width: 767px) {
    margin: 1.5rem auto 0 auto;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: rgba(#ffffff, 0.1);
    width: 0;
    height: 100%;
    transition: width 1s;
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

const PageNotFound = () => {
    const wrapper = useRef(null);
    const heroImage = useRef(null);

    useEffect(() => {
        cardsAnimation();
    });

    const cardsAnimation = () => {
        const wrap = wrapper.current;
        const image = heroImage.current;

        wrap.addEventListener('mousemove', (e) => {
            const imageMoveX = e.clientY / (window.innerWidth / 15);
            const imageMoveY = e.clientY / (window.innerHeight / 15);

            image.style.transform = `translate3d(-${imageMoveX}%, -${imageMoveY}%, 0)`;
            image.style.transitionDuration = '2s';
        });
    };

    return (
        <>
            <Container ref={wrapper}>
                <Image>
                    <Img src={HeroImg} alt="hero-image" ref={heroImage}/>
                </Image>
                <TextBox>
                    <Text>
                        <H1>Ошибка 404. <br/>Страница не найдена</H1>
                        <Description>Кажется такой страницы не существует</Description>
                    </Text>
                    <Link to="/">
                        <Button>
                            <ButtonIcon>
                                <ButtonIconRect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </ButtonIcon>
                            <ButtonText>Вернуться на главную</ButtonText>
                        </Button>
                    </Link>
                </TextBox>
            </Container>
        </>
    );
};

export default PageNotFound;