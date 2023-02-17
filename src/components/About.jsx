import {useTranslation} from 'react-i18next';

import styled, {keyframes} from 'styled-components';

import HTMLIcon from '../img/html-logo.png';
import SCSSIcon from '../img/scss-logo.png';
import JavaScriptIcon from '../img/js-logo.png';
import TypeScriptIcon from '../img/typescript-logo.png';
import ReactIcon from '../img/react-js-logo.png';
import ReduxIcon from '../img/redux-logo.png';
import NodeIcon from '../img/node-js-logo.png';
import GitIcon from '../img/git-logo.png';
import FigmaIcon from '../img/figma-logo.png';

const drawLine = keyframes`
  from {
    stroke-dashoffset: 2000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const eraseLine = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 2000;
  }
`;

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

const Title = styled.div`
  position: relative;
  margin-bottom: 3rem;

  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 2.2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 3rem;
  width: 100%;

  @media (max-width: 767px) {
    padding: 0;
    justify-content: center;
  }

  &:hover::after {
    height: 120%;
    border-color: orange;
    transform: rotate(45deg);
  }

  &:hover::before {
    border-color: orange;
    transform: scale(.8);
  }
`;

const Description = styled.p`
  width: 75%;
  margin-top: 2rem;
  font-size: 1.8rem;
  line-height: 1.7;
  white-space: pre-line;
  color: #fff;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 1.2rem 0 1.2rem;
  }
`;

const Span = styled.span`
  display: block;
  color: #fd640d;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    margin-top: 5rem;
  }
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: end;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: space-around;
  }
`;

const Card = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
  margin: 0 0 5rem 0;

  & + .about__card {
    margin: 0 0 5rem 5rem;

    @media (max-width: 767px) {
      margin: 0 0 6rem 0;
    }
  }

  & .about__card__border, .about__card__image, .about__card__img {
    transition: all .25s ease-in-out 0s;
  }

  & .about__card__border, .about__card__image {
    transform: rotate(-10deg) skew(-10deg);
  }
  
  @media (max-width: 767px) {
    margin: 0 0 6rem 0;
  }

  &:hover {
    .about__card__img {
      transform: scale3d(1, 1, 1);
    }

    .about__card__title, .about__card__img {
      opacity: 1;
    }

    .about__card__border, .about__card__image {
      transform: rotate(-14deg) skew(-14deg) scale(0.96);
    }

    .about__card__title {
      transform: translateX(-1rem);
    }

    .about__card__rect-gradient {
      animation: ${drawLine} 3s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }
  }
`;

const CardBorder = styled.div`
  position: absolute;
  top: 4rem;
  left: -4rem;
  height: 100%;
  width: 100%;
  z-index: 0;

  @media (max-width: 767px) {
    top: 2rem;
    left: -1rem;
  }
`;

const Icon = styled.svg`
  width: 100%;
  height: 100%;
  border-radius: .5rem;
`;

const Rect = styled.rect`
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: ${eraseLine} 1s ease-in-out forwards;
`;

const Image = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: rotate(-10deg) skew(-10deg);
  overflow: hidden;
  background: #f5f5f5;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 .6rem .6rem rgba(0, 0, 0, 0.23);
  border-radius: .5rem;
`;

const Img = styled.img`
  max-width: 15rem;
  max-height: 15rem;
  transform: scale3d(.9, .9, .9);
  opacity: .3;
`;

const CardText = styled.div`
  position: absolute;
  bottom: -4rem;
  left: -10%;
  z-index: 100;

  @media (max-width: 767px) {
    left: 20%;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  transform: translateX(-8rem);
  transition: all .75s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
  color: #ffffff;
  opacity: 0;

  &:nth-child(1) {
    transition-delay: .1s;
  }

  &:nth-child(2) {
    transition-delay: .2s;
  }
`;

const About = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Title>
                <H2>{t("about-title")}</H2>
            </Title>
            <Wrapper>
                <Text>
                    <Description>
                        {t("about-description-part-one")}
                        <Span>{t("about-description-span")}</Span>
                        {t("about-description-part-two")}
                    </Description>
                </Text>
                <ImageWrapper>
                    <Cards>
                        <Card className="about__card">
                            <CardBorder className="about__card__border">
                                <Icon>
                                    <defs>
                                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity:1}}/>
                                            <stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity:1}}/>
                                        </linearGradient>
                                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#D34F48"/>
                                            <stop offset="100%" stopColor="#772522"/>
                                        </linearGradient>
                                    </defs>
                                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                                          strokeMiterlimit="30" width="100%" height="100%"
                                    />
                                </Icon>
                            </CardBorder>
                            <Image className="about__card__image">
                                <Img src={HTMLIcon} alt="" className="about__card__img"/>
                            </Image>
                            <CardText>
                                <CardTitle className="about__card__title">HTML</CardTitle>
                            </CardText>
                        </Card>
                        <Card className="about__card">
                            <CardBorder className="about__card__border">
                                <Icon>
                                    <defs>
                                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity:1}}/>
                                            <stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity:1}}/>
                                        </linearGradient>
                                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#D34F48"/>
                                            <stop offset="100%" stopColor="#772522"/>
                                        </linearGradient>
                                    </defs>
                                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                                          strokeMiterlimit="30" width="100%" height="100%"
                                    />
                                </Icon>
                            </CardBorder>
                            <Image className="about__card__image">
                                <Img src={SCSSIcon} alt="" className="about__card__img"/>
                            </Image>
                            <CardText>
                                <CardTitle className="about__card__title">SCSS</CardTitle>
                            </CardText>
                        </Card>
                        <Card className="about__card">
                            <CardBorder className="about__card__border">
                                <Icon>
                                    <defs>
                                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity:1}}/>
                                            <stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity:1}}/>
                                        </linearGradient>
                                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#D34F48"/>
                                            <stop offset="100%" stopColor="#772522"/>
                                        </linearGradient>
                                    </defs>
                                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                                          strokeMiterlimit="30" width="100%" height="100%"
                                    />
                                </Icon>
                            </CardBorder>
                            <Image className="about__card__image">
                                <Img src={JavaScriptIcon} alt="" className="about__card__img"/>
                            </Image>
                            <CardText>
                                <CardTitle className="about__card__title">JavaScript</CardTitle>
                            </CardText>
                        </Card>
                        <Card className="about__card">
                            <CardBorder className="about__card__border">
                                <Icon>
                                    <defs>
                                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity:1}}/>
                                            <stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity:1}}/>
                                        </linearGradient>
                                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#D34F48"/>
                                            <stop offset="100%" stopColor="#772522"/>
                                        </linearGradient>
                                    </defs>
                                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                                          strokeMiterlimit="30" width="100%" height="100%"
                                    />
                                </Icon>
                            </CardBorder>
                            <Image className="about__card__image">
                                <Img src={TypeScriptIcon} alt="" className="about__card__img"/>
                            </Image>
                            <CardText>
                                <CardTitle className="about__card__title">TypeScript</CardTitle>
                            </CardText>
                        </Card>
                        <Card className="about__card">
                            <CardBorder className="about__card__border">
                                <Icon>
                                    <defs>
                                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity:1}}/>
                                            <stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity:1}}/>
                                        </linearGradient>
                                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#D34F48"/>
                                            <stop offset="100%" stopColor="#772522"/>
                                        </linearGradient>
                                    </defs>
                                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                                          strokeMiterlimit="30" width="100%" height="100%"
                                    />
                                </Icon>
                            </CardBorder>
                            <Image className="about__card__image">
                                <Img src={ReactIcon} alt="" className="about__card__img"/>
                            </Image>
                            <CardText>
                                <CardTitle className="about__card__title">React JS</CardTitle>
                            </CardText>
                        </Card>
                        <Card className="about__card">
                            <CardBorder className="about__card__border">
                                <Icon>
                                    <defs>
                                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity:1}}/>
                                            <stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity:1}}/>
                                        </linearGradient>
                                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#D34F48"/>
                                            <stop offset="100%" stopColor="#772522"/>
                                        </linearGradient>
                                    </defs>
                                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                                          strokeMiterlimit="30" width="100%" height="100%"
                                    />
                                </Icon>
                            </CardBorder>
                            <Image className="about__card__image">
                                <Img src={ReduxIcon} alt="" className="about__card__img"/>
                            </Image>
                            <CardText>
                                <CardTitle className="about__card__title">Redux</CardTitle>
                            </CardText>
                        </Card>
                        <Card className="about__card">
                            <CardBorder className="about__card__border">
                                <Icon>
                                    <defs>
                                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity:1}}/>
                                            <stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity:1}}/>
                                        </linearGradient>
                                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#D34F48"/>
                                            <stop offset="100%" stopColor="#772522"/>
                                        </linearGradient>
                                    </defs>
                                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                                          strokeMiterlimit="30" width="100%" height="100%"
                                    />
                                </Icon>
                            </CardBorder>
                            <Image className="about__card__image">
                                <Img src={NodeIcon} alt="" className="about__card__img"/>
                            </Image>
                            <CardText>
                                <CardTitle className="about__card__title">Node JS</CardTitle>
                            </CardText>
                        </Card>
                        <Card className="about__card">
                            <CardBorder className="about__card__border">
                                <Icon>
                                    <defs>
                                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity:1}}/>
                                            <stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity:1}}/>
                                        </linearGradient>
                                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#D34F48"/>
                                            <stop offset="100%" stopColor="#772522"/>
                                        </linearGradient>
                                    </defs>
                                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                                          strokeMiterlimit="30" width="100%" height="100%"
                                    />
                                </Icon>
                            </CardBorder>
                            <Image className="about__card__image">
                                <Img src={GitIcon} alt="" className="about__card__img"/>
                            </Image>
                            <CardText>
                                <CardTitle className="about__card__title">Git</CardTitle>
                            </CardText>
                        </Card>
                        <Card className="about__card">
                            <CardBorder className="about__card__border">
                                <Icon>
                                    <defs>
                                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity:1}}/>
                                            <stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity:1}}/>
                                        </linearGradient>
                                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#D34F48"/>
                                            <stop offset="100%" stopColor="#772522"/>
                                        </linearGradient>
                                    </defs>
                                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                                          strokeMiterlimit="30" width="100%" height="100%"
                                    />
                                </Icon>
                            </CardBorder>
                            <Image className="about__card__image">
                                <Img src={FigmaIcon} alt="" className="about__card__img"/>
                            </Image>
                            <CardText>
                                <CardTitle className="about__card__title">Figma</CardTitle>
                            </CardText>
                        </Card>
                    </Cards>
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
};

export default About;