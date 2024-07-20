import { FaCalendarAlt, FaGraduationCap, FaHome, FaInfoCircle } from "react-icons/fa";
export const links = [
    {
        id: "1",
        cName: "nav-links",
        name: 'Accueil',
        path: '/',
        icon: <FaHome/>,
    },
    {
        id: "2",
        cName: "nav-links",
        name: 'Qui sommes-nous',
        path: 'about',
        icon: <FaInfoCircle/>,
    },
    {
        id: "3",
        cName: "nav-links",
        name: 'Formations',
        path: 'formation',
        icon: <FaGraduationCap/>,
    },
    {
        id: "4",
        cName: "nav-links",
        name: 'Evenements',
        path: 'evenement',
        icon: <FaCalendarAlt/>,
    },
    {
        id: "5",
        cName: "register-button",
        name: "S'inscrire",
        path: 'signUp',
    },
];