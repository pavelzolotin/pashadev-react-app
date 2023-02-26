import i18next from 'i18next';

export const heroCards = [
    {
        id: 1,
        title: 'JavaScript'
    },
    {
        id: 2,
        title: 'React JS'
    },
    {
        id: 3,
        title: 'Node JS'
    },
    {
        id: 4,
        title: 'SCSS'
    },
    {
        id: 5,
        title: 'TypeScript'
    }
];

export const aboutCards = [
    {
        id: 1,
        image: require('../img/html-logo.png'),
        title: 'HTML',
        alt: 'html-icon'
    },
    {
        id: 2,
        image: require('../img/scss-logo.png'),
        title: 'SCSS',
        alt: 'scss-icon'
    },
    {
        id: 3,
        image: require('../img/js-logo.png'),
        title: 'JavaScript',
        alt: 'javascript-icon'
    },
    {
        id: 4,
        image: require('../img/typescript-logo.png'),
        title: 'TypeScript',
        alt: 'typescript-icon'
    },
    {
        id: 5,
        image: require('../img/react-js-logo.png'),
        title: 'React JS',
        alt: 'reactjs-icon'
    },
    {
        id: 6,
        image: require('../img/redux-logo.png'),
        title: 'Redux',
        alt: 'redux-icon'
    },
    {
        id: 7,
        image: require('../img/node-js-logo.png'),
        title: 'Node JS',
        alt: 'nodejs-icon'
    },
    {
        id: 8,
        image: require('../img/git-logo.png'),
        title: 'Git',
        alt: 'git-icon'
    },
    {
        id: 9,
        image: require('../img/figma-logo.png'),
        title: 'Figma',
        alt: 'figma-icon'
    }
];

export const projects = [
    {
        id: 1,
        image: require('../img/cinematika-screen-one-large.png'),
        title: 'Cinematika',
        description: i18next.t("project-one-description"),
        stack: `React
                React Router v6
                Axios
                Styled-components
                Material UI`,
        link_first: 'https://github.com/pavelzolotin/movie-react-app',
        link_second: 'https://cinematika.netlify.app',
        alt: 'project-cinematika'
    },
    {
        id: 2,
        image: require('../img/newtube-screen-dark-one-large.png'),
        title: 'NewTube',
        description: i18next.t("project-two-description"),
        stack: `React
                React Router v6
                React Redux-toolkit
                Node.js
                Express.js
                Axios
                MongoDB
                Firebase
                Styled-components
                Material UI`,
        link_first: 'https://github.com/pavelzolotin/youtube-clone-react-app',
        link_second: '/',
        alt: 'project-newtube'
    },
    {
        id: 3,
        image: require('../img/metaverse-screen-large.png'),
        title: 'Metaverse',
        description: i18next.t("project-three-description"),
        stack: `React
                Next.js
                Tailwind CSS
                Framer Motion`,
        link_first: 'https://github.com/pavelzolotin/metaverse-react-app',
        link_second: 'https://mad-metaverse.netlify.app/',
        alt: 'project-metaverse'
    }
];

export const footerCards = [
    {
        id: 1,
        image: require('../img/footer-curly-brackets.png')
    },
    {
        id: 2,
        image: require('../img/footer-source-code.png')
    },
    {
        id: 3,
        image: require('../img/footer-react.png')
    },
    {
        id: 4,
        image: require('../img/footer-js.png')
    },
    {
        id: 5,
        image: require('../img/footer-square-brackets.png')
    },
    {
        id: 6,
        image: require('../img/footer-curly-brackets.png')
    },
    {
        id: 7,
        image: require('../img/footer-source-code.png')
    },
    {
        id: 8,
        image: require('../img/footer-react.png')
    },
    {
        id: 9,
        image: require('../img/footer-js.png')
    },
    {
        id: 10,
        image: require('../img/footer-square-brackets.png')
    },
    {
        id: 11,
        image: require('../img/footer-curly-brackets.png')
    },
    {
        id: 12,
        image: require('../img/footer-source-code.png')
    },
    {
        id: 13,
        image: require('../img/footer-react.png')
    },
    {
        id: 14,
        image: require('../img/footer-js.png')
    },
    {
        id: 15,
        image: require('../img/footer-square-brackets.png')
    },
    {
        id: 16,
        image: require('../img/footer-curly-brackets.png')
    }
];

export const footerNav = [
    {
        id: 1,
        image: require('../img/github-icon.png'),
        alt: 'footer-github-icon',
        link: 'https://github.com/pavelzolotin'
    },
    {
        id: 2,
        image: require('../img/email-icon.png'),
        alt: 'footer-mail-icon',
        link: 'mailto:zolotinpavel@gmail.com'
    },
    {
        id: 3,
        image: require('../img/telegram-icon.png'),
        alt: 'footer-telegram-icon',
        link: 'https://t.me/pavelzolotin'
    }
];