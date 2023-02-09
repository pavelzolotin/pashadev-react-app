function cursor() {
// create custom cursor
    const cursorUpdateProps = (elem, state) => {
        elem.style.setProperty('--x', `${state.x}px`);
        elem.style.setProperty('--y', `${state.y}px`);
        elem.style.setProperty('--width', `${state.width}px`);
        elem.style.setProperty('--height', `${state.height}px`);
        elem.style.setProperty('--radius', state.radius);
        elem.style.setProperty('--scale', state.scale);
    };

    document.querySelectorAll('.cursor').forEach((cursor) => {
        let cursorOnElement;

        const createCursorState = (e) => {
            const defaultCursorState = {
                x: e.clientX,
                y: e.clientY,
                width: 42,
                height: 42,
                radius: '100px'
            };

            const computedCursorState = {};

            if (cursorOnElement != null) {
                const {top, left, width, height} = cursorOnElement.getBoundingClientRect();
                const radius = window.getComputedStyle(cursorOnElement).borderTopLeftRadius;

                computedCursorState.x = left + width / 2;
                computedCursorState.y = top + height / 2;
                computedCursorState.width = width;
                computedCursorState.height = height;
                computedCursorState.radius = radius;
            }
            return {
                ...defaultCursorState,
                ...computedCursorState
            }
        };

        document.addEventListener('mousemove', (e) => {
            const cursorState = createCursorState(e);
            cursorUpdateProps(cursor, cursorState);
        });
    });
}

export default cursor;