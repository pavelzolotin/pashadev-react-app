import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Card from '../Card';
import { aboutCards } from '../../utils/data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 170rem;
  height: 100%;
  margin: 12rem auto 0 auto;

  @media (min-width: 1441px) and (max-width: 1780px) {
    max-width: 132rem;
  }
  
  @media (min-width: 1250px) and (max-width: 1600px) {
    max-width: 125rem;
  }

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

  @media (min-width: 1780px) {
    padding: 0 10rem;
  }

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
    padding: 0 1.2rem 0 1.6rem;
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

const Box = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: end;
  -webkit-justify-content: flex-end;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: space-around;
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
                    <Box>
                        {
                            aboutCards.map(card => (
                                <Card
                                    key={card.id}
                                    {...card}
                                />
                            ))
                        }
                    </Box>
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
};

export default About;