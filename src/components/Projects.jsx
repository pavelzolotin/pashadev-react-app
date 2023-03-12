import {useTranslation} from 'react-i18next';

import styled from 'styled-components';

import {projects} from '../constants/data';
import Project from '../components/Project';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 170rem;
  margin: 12rem auto 0 auto;

  @media (min-width: 1250px) and (max-width: 1600px) {
    margin: 10rem 5rem 0 5rem;
  }

  @media (max-width: 767px) {
    margin: 10rem auto 0 auto;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
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

const Projects = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Title>
                <H2>{t("projects-title")}</H2>
            </Title>
            {
                projects.map(project => (
                    <Project
                        key={project.id}
                        {...project}
                    />
                ))
            }
        </Container>
    );
};

export default Projects;