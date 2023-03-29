import styled, {keyframes} from 'styled-components';

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

const Box = styled.div`
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
  z-index: 1;

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

const Card = ({title, image, alt}) => {
    return (
        <Box className="about__card">
            <CardBorder className="about__card__border">
                <Icon>
                    <defs>
                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: "rgb(253,137,68)", stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: "rgb(153,75,23)", stopOpacity: 1}} />
                        </linearGradient>
                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D34F48" />
                            <stop offset="100%" stopColor="#772522" />
                        </linearGradient>
                    </defs>
                    <Rect id="rect-grad" className="about__card__rect-gradient" fill="none"
                          stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4"
                          strokeMiterlimit="30" width="100%" height="100%"
                    />
                </Icon>
            </CardBorder>
            <Image className="about__card__image">
                <Img
                    className="about__card__img"
                    src={image}
                    alt={alt}
                />
            </Image>
            <CardText>
                <CardTitle className="about__card__title">{title}</CardTitle>
            </CardText>
        </Box>
    );
};

export default Card;