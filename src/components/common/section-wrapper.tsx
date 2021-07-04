import './section-wrapper.scss';

import React from 'react';
import classNames from 'classnames';

interface ISectionWrapper {
    id: string,
    title: string,
    children: React.ReactNode,
    className: string,
}
const SectionWrapper = ({ id, title, children, className }: ISectionWrapper) => {
    const combinedClassNames = classNames('section-wrapper', className);

    return (
        <section className={combinedClassNames} id={id}>
            <h1 className="section-wrapper-title">
                {title}
            </h1>
            {children}
        </section>
    );
};

export default SectionWrapper;
