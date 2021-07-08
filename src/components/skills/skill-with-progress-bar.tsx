import './skill-with-progress-bar.scss';

import React, { useState, useEffect } from 'react';
import ProgressBarWithPercantage from '../progress-bar/progress-bar-with-percentage';
import { increaseNumberGradually } from '../../utils/number-utils';

interface SkillProps {
    skillText: string,
    percentageOfKnowledge: number,
    props?: {},
}

const NUMBER_TO_INCREMENT_WITH = 1;
const TIMEOUT_IN_MS = 15;

const SkillWithProgressBar = ({ skillText, percentageOfKnowledge, props }: SkillProps) => {
    const [ percent, setPercent ] = useState(0);

    useEffect(() => {
        increaseNumberGradually(percent, NUMBER_TO_INCREMENT_WITH, setPercent, TIMEOUT_IN_MS, percentageOfKnowledge);
    }, [ percent, percentageOfKnowledge ]);
    
    return (
        <article className="skill-with-progress-bar">
            <span className="skill-with-progress-bar-text">
                {skillText}
            </span>
            <ProgressBarWithPercantage percent={percent} props={props} />
        </article>
    );
}

export default SkillWithProgressBar;
