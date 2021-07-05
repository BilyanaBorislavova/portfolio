import React, { ReactNode } from "react";
import { Link } from "react-scroll";
import classNames from "classnames";

interface ScrollableLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  props?: {};
}

const ScrollableLink = ({
  children,
  href,
  props,
  className,
}: ScrollableLinkProps) => {
  const combinedClassNames = classNames("scrollable-link", className);

  return (
    <Link className={combinedClassNames} to={href} {...props}>
      {children}
    </Link>
  );
};

export default ScrollableLink;
