import "./about.scss";

import React from "react";
import SectionWrapper from "../common/section-wrapper";
import WhyHireMe from "../why-hire-me/why-hire-me";
import { ROUTE_IDs } from "../../constants/constants";

const { ABOUT } = ROUTE_IDs;

const About = () => (
  <SectionWrapper className="about" id={ABOUT} title="About">
      <WhyHireMe />
  </SectionWrapper>
);

export default About;
