import './navigation-link.scss';

import React from 'react';
import { Link } from 'react-scroll';

interface INavigationLink {
    text: string,
    href: string,
}

const NavigationLink = ({ text, href }: INavigationLink) => (
    <Link className="navigation-link" to={href} spy={true} smooth={true} duration={500}>
        {text}
    </Link>
);

export default NavigationLink;
