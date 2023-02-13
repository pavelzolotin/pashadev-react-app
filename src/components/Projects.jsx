import styled from 'styled-components';

import Cinematika from '../img/cinematika-screen-one-large.png';
import NewTube from '../img/newtube-screen-dark-one-large.png';

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
  &:nth-child(1) {
    margin-right: 5rem;
  }

  @media (max-width: 767px) {
    margin-top: 3rem;
  }
`;

const Projects = () => {
    return (
        <Container>
            <Title className="section-projects__title">
                <H2>Примеры некоторых работ</H2>
            </Title>
            <Project className="project">
                <Wrap className="project__wrap">
                    <AnimationWrap className="project__animation-wrap to-right">
                        <Image className="project__image">
                            <Img src={Cinematika} alt=""/>
                        </Image>
                        <Details className="project__details">
                            <ProjectTitle className="project__title">
                                <ProjectH2>Cinematika</ProjectH2>
                            </ProjectTitle>
                            <Description>
                                React-приложение с карточками фильмов, запрашиваемых с API.
                                <br/>
                                <br/>
                                <Span>Стек:</Span>
                                <br/>React
                                <br/>React Router v6
                                <br/>Axios
                                <br/>Styled-components
                                <br/>Material UI
                            </Description>
                            <Buttons className="project__btns">
                                <Button>
                                    <a href="https://github.com/pavelzolotin/movie-react-app"
                                       className="project__btn">Github</a>
                                </Button>
                                <Button>
                                    <a href="https://cinematika.netlify.app" className="project__btn">Демо</a>
                                </Button>
                            </Buttons>
                        </Details>
                    </AnimationWrap>
                </Wrap>
            </Project>
            <Project className="project">
                <Wrap className="project__wrap">
                    <AnimationWrap className="project__animation-wrap to-right">
                        <Image className="project__image">
                            <Img src={NewTube} alt=""/>
                        </Image>
                        <Details className="project__details">
                            <ProjectTitle className="project__title">
                                <ProjectH2>NewTube</ProjectH2>
                            </ProjectTitle>
                            <Description>
                                Клон YouTube, созданный на MERN стеке.
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
                            <Buttons className="project__btns">
                                <Button>
                                    <a href="https://github.com/pavelzolotin/youtube-clone-react-app"
                                       className="project__btn">Github</a>
                                </Button>
                                <Button>
                                    <a href="/" className="project__btn">Демо</a>
                                </Button>
                            </Buttons>
                        </Details>
                    </AnimationWrap>
                </Wrap>
            </Project>
        </Container>
    );
};

export default Projects;