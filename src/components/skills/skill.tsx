import React from 'react';
import ProgressBar from '../progress-bar/progress-bar';

interface SkillProps {
    skillText: string,
    percentageOfKnowledge: number,
    props?: {},
}

const Skill = ({ skillText, percentageOfKnowledge, props }: SkillProps) => (
    <article className="skill">
        {skillText}
        <ProgressBar percent={percentageOfKnowledge} props={props} />
    </article>
);

export default Skill;
