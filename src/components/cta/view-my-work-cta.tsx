import './view-my-work-cta.scss';

import React from 'react';

interface IViewMyWorkCta {
    onClick: () => void,
    text: string
}

const ViewMyWorkCta = ({ onClick, text }: IViewMyWorkCta) => (
    <button className="view-my-work-cta" onClick={onClick}>
        {text}
    </button>
);

export default ViewMyWorkCta;
