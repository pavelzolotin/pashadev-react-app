import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import GlobalFonts from './fonts/fonts';

import Cursor from './components/Cursor';
import Header from './components/Header';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Play', sans-serif;
    background: linear-gradient(to right, #16222a, #3a6073);
    cursor: none;
  }

  body:not(body:hover) .cursor::after {
    opacity: 0;
    transform: scale(0);
  }
  
  button {
    background-color: transparent;
    outline: none;
    border: none;
  }

  a {
    display: block;
    color: #fff;
    letter-spacing: .1rem;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: .5rem .5rem .5rem -.5rem rgba(34, 60, 80, 0.2) inset;
    background-color: #16222a;
  }

  ::-webkit-scrollbar-thumb {
    background: #3a6073;
  }
  
  .sticky {
    background-color: #16222a;
    transition: background-color .5s;
  }
  
  .dot-color {
    background-color: rgba(253, 100, 13, 0.5);
    transition: background-color .5s;
  }
`;

const Container = styled.div``;

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <GlobalFonts/>
            <Cursor/>
            <Container>
                <Header/>
                <Routes>
                    <Route path="/" element={
                       <Home/>
                    }/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;