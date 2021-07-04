import './hexagon-with-content.scss';

import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface HexagonWithContentProps {
    children: ReactNode,
    className?: string,
}

const HexagonWithContent = ({ children, className }: HexagonWithContentProps) => {
    const combinedClassName = classNames('hexagon-with-content', className);
    
    return (
        <article className={combinedClassName}>
            {children}
        </article>
    );
};

export default HexagonWithContent;
