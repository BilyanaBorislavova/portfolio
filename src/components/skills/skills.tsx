import './skills.scss';

import React from "react";
import SkillWithProgressBar from "./skill-with-progress-bar";

const commonPropsForSkills = {
  strokeWidth: 10.1,
  trailWidth: 10.1,
  strokeLinecap: "",
};

const skills = [
  {
    id: "JavaScript",
    text: "JavaScript",
    percentageOfKnowledge: 70,
    props: commonPropsForSkills,
  },
  {
    id: "React",
    text: "React",
    percentageOfKnowledge: 80,
    props: commonPropsForSkills,
  },
  {
    id: "Express",
    text: "Express",
    percentageOfKnowledge: 45,
    props: commonPropsForSkills,
  },
  {
    id: "HTML & CSS/SASS/LESS",
    text: "HTML & CSS/SASS/LESS",
    percentageOfKnowledge: 90,
    props: commonPropsForSkills,
  },
  {
    id: "Jquery",
    text: "Jquery",
    percentageOfKnowledge: 65,
    props: commonPropsForSkills,
  },
];

const Skills = () => (
  <section className="skills">
    <ul className="skills-list">
      {skills.map(({ id, text, percentageOfKnowledge, props }) => (
        <li className="skills-list-item" key={id}>
          <SkillWithProgressBar
            skillText={text}
            percentageOfKnowledge={percentageOfKnowledge}
            props={props}
          />
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
