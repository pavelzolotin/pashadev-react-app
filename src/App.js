import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';

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
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Play', sans-serif;
    background: linear-gradient(to right, #16222a, #3a6073);
    cursor: url('https://s.electerious.com/images/codepen/cursor.svg') 3 3, auto;
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
    cursor: pointer;
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

  .cursor {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: var(--width);
    height: var(--height);
    transform: translate(calc(var(--x) - var(--width) / 2), calc(var(--y) - var(--height) / 2));
    transition-duration: .1s;
    transition-timing-function: cubic-bezier(.25, .25, .42, 1);
    transition-property: width, height, transform;
    z-index: 10;
    pointer-events: none;
    will-change: transform;

    @media (pointer: fine) {
      display: block;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: var(--radius);
      border: .2rem solid #fff;
      opacity: var(--scale);
      transform: scale(var(--scale));
      transition: .3s cubic-bezier(.25, .25, .42, 1) opacity,
      .3s cubic-bezier(.25, .25, .42, 1) transform,
      .3s cubic-bezier(.25, .25, .42, 1) border-radius;
    }
  }
`
const Container = styled.div``

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
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
