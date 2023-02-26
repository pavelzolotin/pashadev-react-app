import i18next from 'i18next';

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
        link_second: 'https://cinematika.netlify.app'
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
        link_second: '/'
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
        link_second: 'https://mad-metaverse.netlify.app/'
    }
];