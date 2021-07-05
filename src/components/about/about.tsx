import "./about.scss";

import React from "react";
import SectionWrapper from "../common/section-wrapper";
import { ROUTE_IDs } from "../../constants/constants";
import AboutWhyHireMe from "./about-why-hire-me";
import AboutMe from "./about-me";
import Skills from "../skills/skills";

const { ABOUT } = ROUTE_IDs;

const About = () => (
  <SectionWrapper className="about" id={ABOUT} title="About">
      <AboutWhyHireMe />
      <section className="about-me-and-my-skills">
        <AboutMe />
        <Skills />
      </section>
  </SectionWrapper>
);

export default About;
