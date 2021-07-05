import "./navigation-link.scss";

import React from "react";
import ScrollableLink from "../common/scrollable-link";

interface NavigationLinkProps {
  text: string;
  href: string;
  props?: {},
}

const NavigationLink = ({ text, href, props }: NavigationLinkProps) => (
  <ScrollableLink className="navigation-link" href={href} props={{ smooth: true }}>
    {text}
  </ScrollableLink>
);

export default NavigationLink;
