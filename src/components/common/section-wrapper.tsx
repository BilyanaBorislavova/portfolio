import './section-wrapper.scss';

import React from 'react';

interface ISectionWrapper {
    title: string,
    children: React.ReactNode
}
const SectionWrapper = ({ title, children }: ISectionWrapper) => (
    <section className="section-wrapper">
        <h1 className="section-wrapper-title">
            {title}
        </h1>
        {children}
    </section>
);

export default SectionWrapper;
