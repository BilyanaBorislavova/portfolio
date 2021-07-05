import './header.scss';

import * as React from 'react';
import ViewMyWorkCta from '../cta/view-my-work-cta';
import { ROUTE_IDs } from '../../constants/constants';

const { HEADER, ABOUT } = ROUTE_IDs;

const Header = () => {
    const aboutId = document.getElementById('about');
    
    return (
        <header className="header" id={HEADER}>
            <p className="header-title">
                Hello, I'm <span className="header-title-highlighted">Bilyana Borislavova</span>.
                I'm a front end developer.
            </p>
            <ViewMyWorkCta
              text="View my work"
              onClick={() => aboutId?.scrollIntoView({ behavior: 'smooth'})}
            />
        </header>
    );
};

export default Header;
