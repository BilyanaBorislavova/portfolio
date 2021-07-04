import './hexagon-with-content-and-text.scss';

import React, { ReactNode } from 'react';
import classNames from 'classnames';
import HexagonWithContent from './hexagon-with-content';

interface HexagonWithContentAndTextProps {
    children: ReactNode,
    title?: string,
    text?: string,
    className?: string,
}

const HexagonWithContentAndText = ({ children, title, text, className }: HexagonWithContentAndTextProps) => {
    const combinedClassNames = classNames('hexagon-with-content-and-text', className);

    return (
        <section className={combinedClassNames}>
            <HexagonWithContent>
                {children}
            </HexagonWithContent>
            <article className="hexagon-with-content-and-text-container">
                {!!title && (
                    <h4 className="hexagon-with-content-and-text-container-title">
                        {title}
                    </h4>
                )}
                {!!text && (
                    <span className="hexagon-with-content-and-text-container-text">
                        {text}
                    </span>
                )}
            </article>
        </section>
    );
};

export default HexagonWithContentAndText;
