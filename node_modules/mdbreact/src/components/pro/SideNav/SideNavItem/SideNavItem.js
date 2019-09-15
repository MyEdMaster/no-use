import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "../../../Waves";

const SideNavItem = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    if (!props.disabled) {
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(cursorPos);
      // do the passed in callback:
      if (props.onClick) {
        props.onClick(e);
      }
      e.stopPropagation();
    }
  };

  const { tag: Tag, children, href, className, innerRef, ...attributes } = props;

  const classes = classNames("Ripple-parent", className);

  return (
    <Tag className={classes} ref={innerRef} onClick={handleClick} {...attributes}>
      <a className={classes} href={href}>
        {children}
        <Waves cursorPos={cursorPos} />
      </a>
    </Tag>
  );
};

SideNavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tag: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

SideNavItem.defaultProps = {
  tag: "li"
};

export default SideNavItem;
export { SideNavItem as MDBSideNavItem };
