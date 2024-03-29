import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

import Logo from '../../assets/img/logo.svg';
import { iconsNav } from '../../utils/data';
import { languages } from '../../utils/data';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 7;
  max-width: 100%;
  height: 8rem;
  padding: 0 7rem 0 7rem;
  transition: background-color .5s;

  @media (max-width: 767px) {
    height: 100%;
    padding: 0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: 27rem;
  height: 5rem;

  @media (max-width: 767px) {
    margin-left: .7rem;
  }
`;

const LogoImage = styled.img`
  width: 100%;

  @media (max-width: 767px) {
    width: 18rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    position: relative;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    padding: 0 2rem 1rem 2rem;
  }
`;

const NavIcon = styled.button`
  display: flex;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin: 0 0 0 3rem;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 4rem;
    height: 4rem;
    margin: 0 0 0 1.5rem;
  }
`;

const Language = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-family: 'Play', sans-serif;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: .1rem;
  text-transform: uppercase;
  margin: 0 0.5rem 0 0.5rem;

  ${({active}) => active && `color: #fd640d;`};

  @media (max-width: 767px) {
    font-size: 1.8rem;
    margin: 0 .7rem 0 .7rem;
  }
`;

const Span = styled.span`
  font-size: 2rem;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;

  @media (max-width: 767px) {
    position: absolute;
    right: 2rem;
    top: -2.3rem;
  }
`;

const NavIconImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Header = () => {
    const {i18n} = useTranslation();

    const [sticky, setSticky] = useState(false);
    const [languageActive, setLanguageActive] = useState(languages[0].type);

    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 50 ? 'sticky' : '';
        setSticky(stickyClass);
    };

    const setActiveLanguage = (type, language) => {
        setLanguageActive(type);
        i18n.changeLanguage(language);
    };

    return (
        <Container className={sticky}>
            <Box>
                <LogoBox>
                    <Link to="/">
                        <LogoImage
                            src={Logo}
                            alt="Logo"
                        />
                    </Link>
                </LogoBox>
                <Navigation>
                    <Language>
                        {
                            languages.map((item, i) => (
                                <div key={item.id}>
                                    {
                                        i > 0 && <Span key={item}>/</Span>
                                    }
                                    <Button
                                        key={item.id}
                                        active={languageActive === item.type}
                                        onClick={() => setActiveLanguage(item.type, item.language)}
                                    >
                                        {item.type}
                                    </Button>
                                </div>
                            ))
                        }
                    </Language>
                    <SocialIcons>
                        {
                            iconsNav.map(icon => (
                                <Link to={icon.link} key={icon.id} target="_blank">
                                    <NavIcon key={icon.id}>
                                        <NavIconImg
                                            src={icon.image}
                                            alt={icon.alt}
                                        />
                                    </NavIcon>
                                </Link>
                            ))
                        }
                    </SocialIcons>
                </Navigation>
            </Box>
        </Container>
    );
};

export default Header;