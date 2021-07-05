import "./navigation-link.scss";

import React from "react";
import { Link } from "react-scroll";

interface INavigationLink {
  text: string;
  href: string;
  props: {},
}

const NavigationLink = ({ text, href, props }: INavigationLink) => (
  <Link className="navigation-link" to={href} {...props}>
    {text}
  </Link>
);

export default NavigationLink;
