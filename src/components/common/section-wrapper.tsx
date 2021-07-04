import './section-wrapper.scss';

import React from 'react';

interface ISectionWrapper {
    id: string,
    title: string,
    children: React.ReactNode
}
const SectionWrapper = ({ id, title, children }: ISectionWrapper) => (
    <section className="section-wrapper" id={id}>
        <h1 className="section-wrapper-title">
            {title}
        </h1>
        {children}
    </section>
);

export default SectionWrapper;
