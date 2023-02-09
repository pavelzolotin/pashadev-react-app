import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../img/logo.png';
import GithubIcon from '../img/github-icon.png';
import MailIcon from '../img/email-icon.png';
import TelegramIcon from '../img/telegram-icon.png';

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
`;

const LogoImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  display: flex;
`;

const LanguageTitle = styled.span`
  font-size: 2rem;
  color: ${props => props.primary ? '#ffffff' : '#fd640d'};
  margin: 0 0.5rem 0 0.5rem;
`;

const Span = styled.span`
  font-size: 2rem;
  color: #fff;
`;

const SocialIcons = styled.div`
  display: flex;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Github = styled.div`
  display: flex;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin: 0 3rem 0 3rem;
  cursor: pointer;
`;

const Mail = styled.div`
  display: flex;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin-right: 3rem;
  cursor: pointer;
`;

const Telegram = styled.div`
  display: flex;
  align-items: center;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
`;

const Header = () => {
    return (
        <Container>
            <Box>
                <LogoBox>
                    <Link to="/">
                        <LogoImage src={Logo} alt="Logo"/>
                    </Link>
                </LogoBox>
                <Navigation>
                    <Language>
                        <Link to="/">
                            <LanguageTitle primary>RU</LanguageTitle>
                        </Link>
                        <Span>/</Span>
                        <Link to="/">
                            <LanguageTitle>EN</LanguageTitle>
                        </Link>
                    </Language>
                    <SocialIcons>
                        <Github>
                            <IconImage src={GithubIcon} alt="github-icon"/>
                        </Github>
                        <Mail>
                            <IconImage src={MailIcon} alt="mail-icon"/>
                        </Mail>
                        <Telegram>
                            <IconImage src={TelegramIcon} alt="telegram-icon"/>
                        </Telegram>
                    </SocialIcons>
                </Navigation>
            </Box>
        </Container>
    )
};

export default Header;