import './skill-with-progress-bar.scss';

import React from 'react';
import ProgressBarWithPercantage from '../progress-bar/progress-bar-with-percentage';

interface SkillProps {
    skillText: string,
    percentageOfKnowledge: number,
    props?: {},
}

const SkillWithProgressBar = ({ skillText, percentageOfKnowledge, props }: SkillProps) => (
    <article className="skill-with-progress-bar">
        <span className="skill-with-progress-bar-text">
            {skillText}
        </span>
        <ProgressBarWithPercantage percent={percentageOfKnowledge} props={props} />
    </article>
);

export default SkillWithProgressBar;
