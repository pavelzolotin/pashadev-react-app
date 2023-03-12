import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import styled from 'styled-components';
import {motion} from 'framer-motion';
import {fadeIn, staggerContainer} from '../utils/motion';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 0 12rem 0;
  height: 100%;

  @media (min-width: 1250px) and (max-width: 1600px) {
    padding: 8rem 0 8rem 0;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 8rem;
    padding: 0 1.5rem 7rem 1.5rem;
    overflow-x: hidden;
  }
`;

const Image = styled.div`
  position: relative;
  width: 50%;
  z-index: 1;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25), 0 .5rem 1rem .3rem rgba(0, 0, 0, 0.20);
`;

const Space = styled.div`
  margin-top: 5rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1250px) and (max-width: 1600px) {
    width: 40%;
  }

  @media (max-width: 767px) {
    margin-top: 5rem;
  }
`;

const ProjectTitle = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

const ProjectH2 = styled.h2`
  font-size: 12rem;
  color: #fff;
  text-shadow: .3rem .3rem #222222;

  @media (min-width: 1250px) and (max-width: 1600px) {
    font-size: 8rem;
  }

  @media (max-width: 767px) {
    font-size: 5rem;
  }
`;

const Description = styled.p`
  width: 70%;
  margin: 1rem 0 0 1rem;
  font-size: 2rem;
  color: #fff;
  line-height: 4rem;
  letter-spacing: .8px;
  white-space: pre-line;

  @media (max-width: 767px) {
    width: 100%;
    margin: 1rem 0 0 0;
    padding: 0 1rem 0 1rem;
  }
`;

const Span = styled.span`
  color: #fd640d;
`;

const Buttons = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: end;
  -webkit-justify-content: flex-end;
  margin-top: 7rem;

  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  position: relative;
  padding: 1.2rem 3rem;
  margin: 0 2rem 0 2rem;
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

  @media (max-width: 767px) {
    margin-top: 3rem;
  }
`;

const Project = ({image, title, description, stack, link_first, link_second, alt}) => {
    const {t} = useTranslation();

    return (
        <Box
            as={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.15}}
        >
            <Image
                as={motion.div}
                variants={fadeIn('right', 'tween', 0.2, 1)}
            >
                <Img src={image} alt={alt}/>
            </Image>
            <Details>
                <ProjectTitle
                    as={motion.div}
                    variants={fadeIn('left', 'tween', 0.5, 1)}
                >
                    <ProjectH2>{title}</ProjectH2>
                </ProjectTitle>
                <Description
                    as={motion.div}
                    variants={fadeIn('left', 'tween', 0.7, 1)}
                >
                    {t(description)}
                    <Space></Space>
                    <Span>{t("project-stack")}:</Span>
                    <br/>
                    {stack}
                </Description>
                <Buttons
                    as={motion.div}
                    variants={fadeIn('left', 'tween', 1, 1)}
                >
                    <Link to={link_first} target="_blank">
                        <Button>
                            <span>Github</span>
                        </Button>
                    </Link>
                    <Link to={link_second} target="_blank">
                        <Button>
                            <span>{t("project-button")}</span>
                        </Button>
                    </Link>
                </Buttons>
            </Details>
        </Box>
    );
};

export default Project;