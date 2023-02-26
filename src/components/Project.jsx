import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import styled from 'styled-components';

const Box = styled.div`
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
  width: 470px;
  margin: 0 7rem 0 15rem;
  font-size: 2rem;
  color: #fff;
  line-height: 4rem;
  letter-spacing: .8px;
  white-space: pre-line;

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

const Project = ({image, title, description, stack, link_first, link_second}) => {
    const {t} = useTranslation();

    return (
        <Box className="project">
            <Wrap className="project__wrap">
                <AnimationWrap className="project__animation-wrap">
                    <Image>
                        <Img src={image} alt=""/>
                    </Image>
                    <Details>
                        <ProjectTitle>
                            <ProjectH2>{title}</ProjectH2>
                        </ProjectTitle>
                        <Description>
                            {t(description)}
                            <br/>
                            <br/>
                            <Span>{t("project-stack")}:</Span>
                            <br/>
                            {stack}
                        </Description>
                        <Buttons>
                            <Link to={link_first}>
                                <Button>
                                    <span>Github</span>
                                </Button>
                            </Link>
                            <Link to={link_second}>
                                <Button>
                                    <span>{t("project-button")}</span>
                                </Button>
                            </Link>
                        </Buttons>
                    </Details>
                </AnimationWrap>
            </Wrap>
        </Box>
    );
};

export default Project;