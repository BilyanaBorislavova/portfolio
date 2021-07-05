import './navigation.scss';

import React from 'react';
import NavigationLink from './navigation-link';
import { ROUTE_IDs } from '../../constants/constants'; 

const { HEADER, ABOUT, PORTFOLIO, CONTACT } = ROUTE_IDs;

const navigationLinks = [
    {
        id: 1,
        text: 'Home',
        href: HEADER,
    },
    {
        id: 2,
        text: 'About',
        href: ABOUT,
    },
    {
        id: 3,
        text: 'Portfolio',
        href: PORTFOLIO,
    },
    {
        id: 4,
        text: 'Contact',
        href: CONTACT,
    },
];

const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation-list">
            {
                navigationLinks.map(({ id, text, href }) => (
                    <li className="navigation-list-item" key={id}>
                        <NavigationLink text={text} href={href} props={{ smooth: true }}/>
                    </li>
                ))
            }
        </ul>
    </nav>
);

export default Navigation;
