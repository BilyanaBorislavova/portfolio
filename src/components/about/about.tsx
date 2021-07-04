import './about.scss';

import React from 'react';
import SectionWrapper from '../common/section-wrapper';
import HexagonWithContentAndText from '../hexagon/hexagon-with-content-and-text';

const About = () => (
    <SectionWrapper className="about" id="about" title="About">
        <HexagonWithContentAndText title="Fast" text="Fast load times and lag free interaction, my highest priority.">
            asd
        </HexagonWithContentAndText>
    </SectionWrapper>
);

export default About;
