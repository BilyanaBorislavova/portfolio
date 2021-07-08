import React from "react";
import SkillWithProgressBar from "./skill-with-progress-bar";

const Skills = () => (
  <section className="skills">
    <SkillWithProgressBar
      skillText="JavaScript"
      percentageOfKnowledge={70}
      props={{
          strokeWidth: 10.1,
          trailWidth: 10.1,
          strokeLinecap: ''
    }}
    />
  </section>
);

export default Skills;
