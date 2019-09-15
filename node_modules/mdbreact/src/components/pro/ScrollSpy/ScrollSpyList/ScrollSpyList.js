import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ScrollSpyList = props => {
  const { className, children, color, ...attributes } = props;

  const classes = classNames("nav md-tabs horizontal-spy", color ? color : false, className);

  return (
    <ul {...attributes} role="navigation" className={classes}>
      {children}
    </ul>
  );
};

ScrollSpyList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string
};

export default ScrollSpyList;
export { ScrollSpyList as MDBScrollspyList };
