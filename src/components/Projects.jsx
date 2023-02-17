import {useRef, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styled from 'styled-components';

import Cinematika from '../img/cinematika-screen-one-large.png';
import NewTube from '../img/newtube-screen-dark-one-large.png';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12rem auto 0 auto;

  @media (max-width: 767px) {
    margin: 6rem auto 0 auto;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
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

const Project = styled.div`
  overflow-x: hidden;

  &:nth-child(2) {
  @include phone {
    margin-top: 7rem;
  }
  }

  &:last-child {
    margin-top: 5rem;

    @media (max-width: 767px) {
      margin-top: 12rem;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 100vh;
`;

const AnimationWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 100vh;
`;

const Image = styled.div`
  position: relative;
  width: 1000px;
  margin-left: 8rem;
  z-index: 1;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25), 0 .5rem 1rem .3rem rgba(0, 0, 0, 0.20);
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7rem;

  @media (max-width: 767px) {
    padding: 0 2rem;
  }
`;

const ProjectTitle = styled.div``;

const ProjectH2 = styled.h2`
  font-size: 10vw;
  color: #fff;
  text-shadow: .3rem .3rem #222222;

  @media (max-width: 767px) {
    font-size: 12vw;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  color: #fff;
  line-height: 4rem;
  letter-spacing: .8px;
  width: 470px;
  margin: 0 7rem 0 15rem;

  @media (max-width: 767px) {
    padding: 0;
  }
`;

const Span = styled.span`
  color: #fd640d;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 5rem 0 0;
`;

const Button = styled.button`
  position: relative;
  padding: 1.2rem 3rem;
  font-family: 'Play', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: .3rem;
  text-transform: uppercase;
  background-color: transparent;
  border: .2rem solid #fd640d;
  border-radius: 0.5rem;
  color: #fff;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 .5rem .3rem -.2rem rgba(0, 0, 0, 0.23);
  overflow: hidden;

  &::after {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    transition: 1s all;
    background-color: #fd640d59;
    color: #fff;
  }

  &:hover {
    &::after {
      transform: translateX(100%);
    }
  }

  &:nth-child(1) {
    margin-right: 5rem;
  }

  @media (max-width: 767px) {
    margin-top: 3rem;
  }
`;

const Projects = () => {
    const {t} = useTranslation();

    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(self => {
            const projects = self.selector('.project');

            projects.forEach(proj => {
                let wrap = proj.querySelector('.project__wrap');
                let animationWrap = wrap.querySelector('.project__animation-wrap');
                let getToValue = () => -(animationWrap.scrollWidth - window.innerWidth);

                gsap.fromTo(
                    animationWrap,
                    {
                        x: () => (animationWrap ? 0 : getToValue()),
                        immediateRender: false,
                    },
                    {
                        x: () => (animationWrap ? getToValue() : 0),
                        ease: '.3s',
                        scrollTrigger: {
                            trigger: proj,
                            start: 'top top',
                            end: () => '+=' + (animationWrap.scrollWidth - window.innerWidth),
                            pin: wrap,
                            invalidateOnRefresh: true,
                            scrub: true,
                        },
                    }
                );
            });
        }, main);
        return () => ctx.revert();
    });

    return (
        <Container ref={main}>
            <Title>
                <H2>{t("projects-title")}</H2>
            </Title>
            <Project className="project">
                <Wrap className="project__wrap">
                    <AnimationWrap className="project__animation-wrap">
                        <Image>
                            <Img src={Cinematika} alt=""/>
                        </Image>
                        <Details>
                            <ProjectTitle>
                                <ProjectH2>Cinematika</ProjectH2>
                            </ProjectTitle>
                            <Description>
                                {t("project-one-description")}
                                <br/>
                                <br/>
                                <Span>Стек:</Span>
                                <br/>React
                                <br/>React Router v6
                                <br/>Axios
                                <br/>Styled-components
                                <br/>Material UI
                            </Description>
                            <Buttons>
                                <Link to="https://github.com/pavelzolotin/movie-react-app">
                                    <Button>
                                        <span>Github</span>
                                    </Button>
                                </Link>
                                <Link to="https://cinematika.netlify.app">
                                    <Button>
                                        <span>{t("project-button")}</span>
                                    </Button>
                                </Link>
                            </Buttons>
                        </Details>
                    </AnimationWrap>
                </Wrap>
            </Project>
            <Project className="project">
                <Wrap className="project__wrap">
                    <AnimationWrap className="project__animation-wrap">
                        <Image>
                            <Img src={NewTube} alt=""/>
                        </Image>
                        <Details>
                            <ProjectTitle>
                                <ProjectH2>NewTube</ProjectH2>
                            </ProjectTitle>
                            <Description>
                                {t("project-two-description")}
                                <br/>
                                <br/>
                                <Span>Стек:</Span>
                                <br/>MongoDB
                                <br/>Express.js
                                <br/>Node.js
                                <br/>Firebase
                                <br/>React
                                <br/>React Router v6
                                <br/>React Redux-toolkit
                                <br/>Axios
                                <br/>Styled-components
                                <br/>Material UI
                            </Description>
                            <Buttons>
                                <Link to="https://github.com/pavelzolotin/youtube-clone-react-app">
                                    <Button>
                                        <span>Github</span>
                                    </Button>
                                </Link>
                                <Link to="/">
                                    <Button>
                                        <span>{t("project-button")}</span>
                                    </Button>
                                </Link>
                            </Buttons>
                        </Details>
                    </AnimationWrap>
                </Wrap>
            </Project>
        </Container>
    );
};

export default Projects;