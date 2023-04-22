import {useRef, useEffect, useCallback} from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  width: .6rem;
  height: .6rem;
  background-color: #ffffff;
  pointer-events: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  opacity: 1;
  transition: width .3s, height .3s, transform .3s;
  z-index: 10;

  @media (max-width: 767px) {
    display: none;
  }
`;

const CursorDotOutline = styled(CursorDot)`
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border: .2rem solid #ffffff;
  transition: width .3s, height .3s, transform .3s;
`;

const Index = () => {
    const dot = useRef(null);
    const dotOutline = useRef(null);
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);
    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);
    const requestRef = useRef(null);
    const delay = 12;

    const toggleCursorVisibility = () => {
        if (cursorVisible.current) {
            dot.current.style.opacity = 1;
            dotOutline.current.style.opacity = 1;
        } else {
            dot.current.style.opacity = 0;
            dotOutline.current.style.opacity = 0;
        }
    };

    const toggleCursorSize = () => {
        if (cursorEnlarged.current) {
            dotOutline.current.classList.add('cursor-bigger');
        } else {
            dotOutline.current.classList.remove('cursor-bigger');
        }
    };

    const handleLinkHovers = useCallback(() => {
            document.querySelectorAll('a, button').forEach(el => {
                el.addEventListener('mouseover', () => {
                    cursorEnlarged.current = true;
                    dotOutline.current.classList.add('dot-color');
                    dotOutline.current.style.transition = 'width .3s, height .3s, background-color .5s';
                    toggleCursorSize();
                });

                el.addEventListener('mouseleave', () => {
                    cursorEnlarged.current = false;
                    dotOutline.current.classList.remove('dot-color');
                    dotOutline.current.style.transition = 'width .3s, height .3s, background-color .5s';
                    toggleCursorSize();
                });
            });
        }, []
    );

    const mouseOverEvent = useCallback(() => {
            cursorEnlarged.current = true;
            toggleCursorSize();
        }, []
    );

    const mouseOutEvent = useCallback(() => {
            cursorEnlarged.current = false;
            toggleCursorSize();
        }, []
    );

    const mouseEnterEvent = useCallback(() => {
            cursorVisible.current = true;
            toggleCursorVisibility();
        }, []
    );

    const mouseLeaveEvent = useCallback(() => {
            cursorVisible.current = false;
            toggleCursorVisibility();
        }, []
    );

    const mouseMoveEvent = useCallback((e) => {
            cursorVisible.current = true;
            toggleCursorVisibility();

            endX.current = e.clientX;
            endY.current = e.clientY;

            dot.current.style.top = endY.current + 'px';
            dot.current.style.left = endX.current + 'px';
        }, []
    );

    const animateDotOutline = useCallback(() => {
            _x.current += (endX.current - _x.current) / delay;
            _y.current += (endY.current - _y.current) / delay;

            dotOutline.current.style.top = _y.current + 'px';
            dotOutline.current.style.left = _x.current + 'px';

            requestRef.current = requestAnimationFrame(animateDotOutline);
        }, []
    );

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);
        animateDotOutline();
        handleLinkHovers();

        return () => {
            document.removeEventListener('mousedown', mouseOverEvent);
            document.removeEventListener('mouseup', mouseOutEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseenter', mouseEnterEvent);
            document.removeEventListener('mouseleave', mouseLeaveEvent);
            cancelAnimationFrame(requestRef.current);
        };
    }, [animateDotOutline, handleLinkHovers, mouseOverEvent, mouseOutEvent, mouseMoveEvent, mouseEnterEvent, mouseLeaveEvent]);

    return (
        <>
            <CursorDotOutline ref={dotOutline}></CursorDotOutline>
            <CursorDot ref={dot}></CursorDot>
        </>
    );
};

export default Index;