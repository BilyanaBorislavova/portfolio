import React from "react";
import Skill from "./skill";

const Skills = () => (
  <section className="skills">
    <Skill
      skillText="JavaScript"
      percentageOfKnowledge={70}
      props={{
          strokeWidth: 7,
          trailWidth: 7
    }}
    />
  </section>
);

export default Skills;
