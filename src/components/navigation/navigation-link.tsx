import './navigation-link.scss';

import React from 'react';

interface INavigationLink {
    text: string,
    href: string,
}

const NavigationLink = ({ text, href }: INavigationLink) => (
    <a className="navigation-link" href={href}>
        {text}
    </a>
);

export default NavigationLink;
