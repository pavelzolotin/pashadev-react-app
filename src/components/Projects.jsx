import {useRef, useLayoutEffect} from 'react';
import {useTranslation} from 'react-i18next';

import styled from 'styled-components';

import {projects} from '../constants/data';
import Project from '../components/Project';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12rem auto 0 auto;
  
  @media (max-width: 767px) {
    margin: 10rem auto 0 auto;
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

const Projects = () => {
    const {t} = useTranslation();
    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(self => {
            const projects = self.selector('.project');

            projects.forEach(project => {
                let wrap = project.querySelector('.project__wrap');
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
                        ease: 'slow(0.7, 0.7, false)',
                        scrollTrigger: {
                            trigger: project,
                            start: 'top top',
                            end: () => '+=' + (animationWrap.scrollWidth - window.innerWidth),
                            pin: wrap,
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