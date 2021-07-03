import './header.scss';

import * as React from 'react';
import ViewMyWorkCta from '../cta/view-my-work-cta';

const Header = () => (
    <header className="header">
        <p className="header-title">
            Hello, I'm <span className="header-title-highlighted">Bilyana Borislavova</span>.
            I'm a front end developer.
        </p>
        <ViewMyWorkCta
          text="View my work"
          onClick={() => console.log('here')}
        />
    </header>
);

export default Header;
