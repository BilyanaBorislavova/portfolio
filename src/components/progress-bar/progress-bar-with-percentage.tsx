import './progress-bar-with-percentage.scss';

import React from 'react';
import ProgressBar from './progress-bar';

interface ProgressBarWithPercantageProps {
    percent: number,
    props?: {}
}

const ProgressBarWithPercantage = ({ percent, props }: ProgressBarWithPercantageProps) => (
    <article className="progress-bar-with-percentage">
        <span className="progress-bar-with-percentage-as-text">
            {percent}%
        </span>
        <ProgressBar percent={percent} props={props} />
    </article>
);

export default ProgressBarWithPercantage;
