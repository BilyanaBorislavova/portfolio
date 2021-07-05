import './view-my-work-cta.scss';

import React from 'react';
import ScrollableLink from '../common/scrollable-link';

interface IViewMyWorkCta {
    href: string,
    text: string
}

const ViewMyWorkCta = ({ href, text }: IViewMyWorkCta) => (
    <ScrollableLink className="view-my-work-cta" href={href} props={{ smooth: true }}>
        {text}
        <i className="view-my-work-cta-arrow" />
    </ScrollableLink>
);

export default ViewMyWorkCta;
